import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

import { AuthModule } from 'src/auth/auth.module';
import { TransactionsRepository } from './transactions.repository';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { transactionsProviders } from './transactions.providers';

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [TransactionsRepository, TransactionsService, ...transactionsProviders],
  controllers: [TransactionsController],
})
export class TransactionsModule {}