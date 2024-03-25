import { User } from '../auth/interfaces/user.interface';
import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { Transaction } from './types/transactions.interface';
import { TransactionDTO } from './dto/transactions.dto';

@Injectable()
export class TransactionsRepository {
  constructor(
    @Inject('TRANSACTION_MODEL') private readonly model: Model<Transaction>,
  ) {}

  async createTransaction(
    transactionDTO: TransactionDTO,
    user: User,
  ): Promise<Transaction> {
    const { amount } = transactionDTO;
    console.log(transactionDTO)
    const transaction = this.model.create({ user, amount });
    try {
      return await transaction;
    } catch (error) {
        console.log(error)
      throw new InternalServerErrorException();
    }
  }

  async getTransactions(user: User): Promise<Transaction[]> {
    return this.model.find({ user, deletedAt: undefined });
  }

  async deleteTransaction(id: string): Promise<void> {
    await this.model.updateOne({ _id: id }, { deletedAt: new Date() });
  }
}
