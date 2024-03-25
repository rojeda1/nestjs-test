import { Mongoose } from 'mongoose';
import { userSchema } from '../auth/schemas/user.schema';

export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('User', userSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];