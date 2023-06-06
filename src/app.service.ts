import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

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
}
