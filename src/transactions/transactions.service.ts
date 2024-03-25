import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/auth/interfaces/user.interface';
import { TransactionsRepository } from './transactions.repository';
import { Transaction } from './types/transactions.interface';
import { TransactionDTO } from './dto/transactions.dto';

@Injectable()
export class TransactionsService {
  constructor(private transactionsRepository: TransactionsRepository) {}

  async deleteTransaction(id: string): Promise<void> {
    return this.transactionsRepository.deleteTransaction(id);
  }

//   async updateTransaction(
//     id: string,
//     transactionDTO: TransactionDTO,
//   ): Promise<Transaction> {

//   }

  async getTransactions(user: User): Promise<Transaction[]> {
    return this.transactionsRepository.getTransactions(user);
  }

  async createTransaction(
    transactionDTO: TransactionDTO,
    user: User,
  ): Promise<Transaction> {
    return this.transactionsRepository.createTransaction(transactionDTO, user);
  }
}
