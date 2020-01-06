/*
 * @description: 用passport-jwt实现用户身份验证
 * @author: zpl
 * @Date: 2019-12-25 11:25:45
 * @LastEditTime : 2019-12-25 15:21:20
 * @LastEditors  : zpl
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.username
    }
  }
}