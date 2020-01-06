/*
 * @description: 日志中间件
 * @author: zpl
 * @Date: 2019-12-20 18:33:12
 * @LastEditTime : 2019-12-23 15:02:16
 * @LastEditors  : zpl
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(req.method, req.originalUrl);
    next();
  }
}
