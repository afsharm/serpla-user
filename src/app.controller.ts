import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  public getUser(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.appService.createUser(body);
  }
}
