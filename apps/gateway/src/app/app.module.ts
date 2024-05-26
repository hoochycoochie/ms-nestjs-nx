import { ConfigModule } from '@medsen/config';
import { LoggerModule } from '@medsen/logger';
import { PRODUCT_TOKEN_SERVICE_NAME } from '@medsen/shared';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule,
    LoggerModule,
    ClientsModule.register([
      {
        name: PRODUCT_TOKEN_SERVICE_NAME,
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: 3001,
        },
      },
    ]),
  ],
  providers: [ConfigService],
})
export class AppModule {}
