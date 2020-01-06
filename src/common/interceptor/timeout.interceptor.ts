/*
 * @description: 通过拦截器实现请求超时定制化处理
 * @author: zpl
 * @Date: 2019-12-24 09:37:12
 * @LastEditTime : 2019-12-24 09:37:47
 * @LastEditors  : zpl
 */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(timeout(5000))
  }
}