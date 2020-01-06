/*
 * @description: 
 * @author: zpl
 * @Date: 2019-12-24 12:05:15
 * @LastEditTime : 2020-01-06 13:46:19
 * @LastEditors  : zpl
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

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('development', 'production', 'test', 'provision').default('development'),
        PORT: Joi.number().default(3000),
      }),
      envFilePath: (():string=>{
        switch(process.env.NODE_ENV){
          case 'production':
            return `${process.cwd()}/env/production.env`;
          case 'development':
          default: 
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
