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

  @Get('users/:id')
  public getUser(@Param('id') id: string): Promise<User> {
    return this.appService.getUser(id);
  }

  @Post('users')
  public async createUser(@Body() body: CreateUserDto): Promise<string> {
    const result = await this.appService.createUser(body);
    const uri = `/users/${result.id}`;
    return uri;
  }
}
