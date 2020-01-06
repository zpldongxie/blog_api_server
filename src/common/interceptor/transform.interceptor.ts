/*
 * @description: 通过拦截器实现返回值二次封装
 * @author: zpl
 * @Date: 2019-12-24 08:59:14
 * @LastEditTime : 2019-12-24 09:26:45
 * @LastEditors  : zpl
 */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
}