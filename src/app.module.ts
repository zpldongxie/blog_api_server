/*
 * @description: 
 * @author: zpl
 * @Date: 2019-12-24 12:05:15
 * @LastEditTime: 2020-03-18 11:25:05
 * @LastEditors: zpl
 */
import { Module, NestModule, MiddlewareConsumer, ValidationPipe } from '@nestjs/common';
import { APP_PIPE, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ErrorsInterceptor } from './common/interceptor/errors.interceptor';
import { ConfigModule } from '@nestjs/config'
import * as Joi from '@hapi/joi';

import configuration from './config/configuration';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CustomMongooseModule } from './custom-mongoose/custom-mongoose.module';
import { async } from 'rxjs/internal/scheduler/async';
import { TypeModule } from './type/type.module';
import { LableModule } from './lable/lable.module';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
        PORT: Joi.number().default(3000),
      }),
      envFilePath: ((): string => {
        console.log('process.argv: ' + process.argv);
        switch (process.argv.length) {
          case 2:
            console.log('loading production.env ...');
            return `${process.cwd()}/env/production.env`;
          case 3:
          default:
            console.log('loading development.env ...');
            return `${process.cwd()}/env/development.env`;
        }
      })(),
      isGlobal: true,
      load: [configuration]
    }),
    CustomMongooseModule,
    CatsModule,
    AuthModule,
    UsersModule,
    TypeModule,
    LableModule,
    ChannelsModule,
  ],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: ErrorsInterceptor
    // },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe
    },
    AppService
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
