import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('hello')
  getHello(): string {
    return this.usersService.getHello();
  }

  @Get()
  public getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id')
  public getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUser(id);
  }

  @Post()
  public async createUser(@Body() body: CreateUserDto): Promise<string> {
    const result = await this.usersService.createUser(body);
    const uri = `/users/${result.id}`;
    return uri;
  }
}
