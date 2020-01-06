/*
 * @description: 用户模块
 * @author: zpl
 * @Date: 2019-12-24 16:33:15
 * @LastEditTime : 2020-01-04 16:45:20
 * @LastEditors  : zpl
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
