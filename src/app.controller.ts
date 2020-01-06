/*
 * @description: 入口控制器
 * @author: zpl
 * @Date: 2019-12-19 17:39:51
 * @LastEditTime : 2020-01-02 12:13:42
 * @LastEditors  : zpl
 */
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from './auth/auth.service'
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService
  ) { }

  @Get()
  index() {
    return { };
  }

  @Get('/test')
  test() {
    return { };
  }

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Request() req) {
    return req.user;
  }
}
