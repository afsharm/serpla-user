import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  public getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Get(':id')
  public getUser(@Param('id') id: string): Promise<User> {
    return this.appService.getUser(id);
  }

  @Post()
  public async createUser(@Body() body: CreateUserDto): Promise<string> {
    const result = await this.appService.createUser(body);
    const uri = `/users/${result.id}`;
    return uri;
  }
}
