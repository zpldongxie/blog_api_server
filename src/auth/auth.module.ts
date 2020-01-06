/*
 * @description: 用户验证模块
 * @author: zpl
 * @Date: 2019-12-24 16:32:13
 * @LastEditTime : 2019-12-25 12:07:54
 * @LastEditors  : zpl
 */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s'}
    }),
    UsersModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
