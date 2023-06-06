import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  public getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Get(':id')
  public getUser(@Param('id') id: string): Promise<User> {
    return this.appService.getUser(id);
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.appService.createUser(body);
  }
}
