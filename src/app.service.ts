/*
 * @description: 
 * @author: zpl
 * @Date: 2019-12-24 12:05:15
 * @LastEditTime : 2020-01-04 10:57:19
 * @LastEditors  : zpl
 */
import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap, OnApplicationShutdown {
  onApplicationBootstrap() {
    console.log(`Start at port ${process.env.PORT} ...`);
  }

  onApplicationShutdown(signal?: string) {
    console.log('shutdown...');
  }
}