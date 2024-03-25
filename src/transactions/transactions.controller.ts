import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/interfaces/user.interface';
import { GetUser } from 'src/auth/get-user.decorator'; 
import { Transaction } from './types/transactions.interface';
import { TransactionDTO } from './dto/transactions.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
@UseGuards(AuthGuard('jwt'))
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  getTransactions(@GetUser() user: User): Promise<Transaction[]> {
    return this.transactionsService.getTransactions(user);
  }

  @Post()
  async createTransaction(
    @Body() transactionDTO: TransactionDTO,
    @GetUser() user: User,
  ): Promise<Transaction> {
    console.log(transactionDTO)
    return this.transactionsService.createTransaction(
      transactionDTO,
      user,
    );
  }

  @Delete('/:id')
  deleteTransaction(
    @Param('id') id: string,
  ): Promise<void> {
    return this.transactionsService.deleteTransaction(id);
  }

  // @Patch('/:id')
  // updateTransaction(
  //   @Param('id') id: string,
  //   @Body() transactionDTO: TransactionDTO,
  //   @GetUser() user: User,
  // ): Promise<Transaction> {
  //   return this.transactionsService.updateTransaction(id, transactionDTO, user);
  // }
}
