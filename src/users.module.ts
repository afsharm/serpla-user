import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AppService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { getEnvPath } from './common/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { User } from './user.entity';

const envFilePath: string = getEnvPath(`./src/`);

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UsersController],
  providers: [AppService],
})
export class AppModule {}
