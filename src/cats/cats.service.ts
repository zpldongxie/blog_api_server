/*
 * @description: 服务类，负责数据的存储和检索
 * @author: zpl
 * @Date: 2019-12-20 16:46:40
 * @LastEditTime : 2019-12-31 18:16:40
 * @LastEditors  : zpl
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cats.interface';
import { CreateCatDto } from './dto/dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) { }

  async create(cat: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(cat);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }
}
