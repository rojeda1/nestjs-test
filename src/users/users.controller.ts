import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/auth/interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Patch('/:id')
  updateUser(@Param('id') id: string): Promise<void> {
    return this.usersService.updateUser(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUser(id);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
