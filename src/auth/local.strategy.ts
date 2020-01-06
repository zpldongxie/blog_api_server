/*
 * @description: 用passport-local实现登录验证
 * @author: zpl
 * @Date: 2019-12-25 09:11:44
 * @LastEditTime : 2019-12-25 11:53:51
 * @LastEditors  : zpl
 */
import {Strategy} from 'passport-local'
import {PassportStrategy} from '@nestjs/passport'
import {Injectable, UnauthorizedException} from '@nestjs/common'
import {AuthService} from './auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if(!user){
      throw new UnauthorizedException();
    }
    return user;
  }
}