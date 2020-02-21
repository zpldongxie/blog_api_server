/*
 * @description: 类型模块
 * @author: zpl
 * @Date: 2020-02-18 12:46:57
 * @LastEditTime: 2020-02-18 13:39:56
 * @LastEditors: zpl
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { TypeSchema } from './schemas/type.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Type', schema: TypeSchema }])],
  controllers: [TypeController],
  providers: [TypeService]
})
export class TypeModule {}
