/*
 * @description: 应用入口
 * @author: zpl
 * @Date: 2019-12-19 17:39:51
 * @LastEditTime : 2020-01-04 18:23:15
 * @LastEditors  : zpl
 */
import { NestFactory } from '@nestjs/core';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  app.enableShutdownHooks();
  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
