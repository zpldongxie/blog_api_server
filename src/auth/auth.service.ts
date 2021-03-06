/*
 * @description: 用户验证服务
 * @author: zpl
 * @Date: 2019-12-24 16:32:24
 * @LastEditTime : 2019-12-25 11:08:35
 * @LastEditors  : zpl
 */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId};
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
