/*
 * @description: 通过拦截器实现日志记录
 * @author: zpl
 * @Date: 2019-12-23 18:06:18
 * @LastEditTime : 2019-12-24 09:26:10
 * @LastEditors  : zpl
 */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    const now = Date.now();
    return next.handle().pipe(
      tap(() => console.log(`After...${Date.now() - now}ms`))
    );
  }
}