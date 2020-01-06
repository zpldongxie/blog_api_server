/*
 * @description: 
 * @author: zpl
 * @Date: 2020-01-02 11:11:43
 * @LastEditTime : 2020-01-02 11:51:49
 * @LastEditors  : zpl
 */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

import { CustomMongooseService } from './custom-mongoose.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: CustomMongooseService,
    }),
  ],
  providers: [CustomMongooseService],
  exports: [CustomMongooseService]
})
export class CustomMongooseModule {}
