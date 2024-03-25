import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from 'src/auth/interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async deleteUser(id: string): Promise<void> {
    return this.usersRepository.deleteUser(id);
  }

  async updateUser(id: string): Promise<void> {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }
}
