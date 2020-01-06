/*
 * @description: 
 * @author: zpl
 * @Date: 2020-01-02 11:13:19
 * @LastEditTime : 2020-01-04 14:52:17
 * @LastEditors  : zpl
 */
import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomMongooseService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService){}

  createMongooseOptions(): MongooseModuleOptions {    
    return {
      // uri: 'mongodb://39.105.69.209:27017/blog_api_server',
      uri: `mongodb://${this.configService.get('MONGODB_HOST')}:${this.configService.get('MONGODB_PORT')}/${this.configService.get('MONGODB_NAME')}`,
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
}
