import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './user.dto';

@Injectable()
export class AppService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  getHello(): string {
    return 'Hello World!';
  }

  public getUsers(): Promise<User[]> {
    return this.repository.find();
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.userName = body.userName;
    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.email = body.email;

    return this.repository.save(user);
  }
}
