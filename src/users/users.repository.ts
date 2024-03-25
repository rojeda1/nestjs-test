import { User } from '../auth/interfaces/user.interface';
import {
  ConflictException,
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthCredentialsDTO } from '../auth/dto/auth-credentials.dto';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(@Inject('USER_MODEL') private readonly model: Model<User>) {}

  async createUser(authCredentialsDTO: AuthCredentialsDTO): Promise<void> {
    const { username, password } = authCredentialsDTO;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.model.create({ username, password: hashedPassword });
    try {
      await user;
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async getUserByUsername(username: string): Promise<User> {
    return this.model.findOne({ username, deletedAt: undefined });
  }

  async getUsers(): Promise<User[]> {
    return this.model.find({ deletedAt: undefined });
  }

  async deleteUser(id: string): Promise<void> {
    await this.model.updateOne({ _id: id }, { deletedAt: new Date() });
  }
}
