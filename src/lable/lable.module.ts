/*
 * @description: 标签模块
 * @author: zpl
 * @Date: 2020-02-18 12:54:01
 * @LastEditTime: 2020-02-20 10:11:39
 * @LastEditors: zpl
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LableController } from './lable.controller';
import { LableService } from './lable.service';
import { LableSchema } from './schemas/lable.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lable', schema: LableSchema }])],
  controllers: [LableController],
  providers: [LableService]
})
export class LableModule {}
