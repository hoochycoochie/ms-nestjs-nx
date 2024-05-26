import { Module } from '@nestjs/common';

import { ConfigModule } from '@medsen/config';
import { LoggerModule } from '@medsen/logger';
import { ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
