import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from '../users/users.providers';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [UsersRepository, UsersService, ...usersProviders],
  controllers: [UsersController],
})
export class UsersModule {}
