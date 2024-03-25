import { Mongoose } from 'mongoose';
import { transactionSchema } from './schemas/transaction.schema';

export const transactionsProviders = [
  {
    provide: 'TRANSACTION_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Transaction', transactionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];