import { Document } from 'mongoose';
import { User } from 'src/auth/interfaces/user.interface';

export interface Transaction extends Document {
  readonly user: User;
  readonly amount: number;
  readonly deletedAt: Date;
}
