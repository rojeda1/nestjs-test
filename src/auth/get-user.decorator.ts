import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { User } from './interfaces/user.interface';

export const GetUser = createParamDecorator(
  (_data, context: ExecutionContext): User => {
    const req = context.switchToHttp().getRequest();
    return req.user;
  },
);
