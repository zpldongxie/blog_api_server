/*
 * @description: 类型数据库服务类
 * @author: zpl
 * @Date: 2020-02-18 12:48:44
 * @LastEditTime: 2020-02-21 19:40:06
 * @LastEditors: zpl
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Type } from './interfaces/types.interface';
import { CreateTypeDto } from './dto/create-type-dto'
import { ChangeNameDto } from './dto/change-name-dto';
import { UpdateTypeDto } from './dto/update-type-dto';
import { ChangeColorDto } from './dto/change-color-dto';

@Injectable()
export class TypeService {
  constructor(@InjectModel('Type') private readonly typeModel: Model<Type>) { }

  /**
   * 创建类型
   *
   * @param {CreateTypeDto} createTypeDto
   * @returns {Promise<Type>}
   * @memberof TypesService
   */
  async create(createTypeDto: CreateTypeDto): Promise<Type> {
    const createdType = new this.typeModel(createTypeDto);
    return await createdType.save();
  }


  /**
   * 更新类型信息
   *
   * @param {CreateTypeDto} createTypeDto
   * @returns {Promise<Type>}
   * @memberof TypesService
   */
  async update(updateTypeDto: UpdateTypeDto): Promise<Type> {
    return await this.typeModel.findOne({ _id: updateTypeDto._id }).then(type => {
      return type.update(updateTypeDto);
    });
  }

  /**
   * 查询所有类型
   *
   * @returns {Promise<Type[]>}
   * @memberof TypesService
   */
  async findAll(): Promise<Type[]> {
    return await this.typeModel.find().exec();
  }

  /**
   * 根据ID查找类型
   *
   * @param {string} id
   * @returns {(Promise<Type | undefined>)}
   * @memberof TypesService
   */
  async findOne(id: string): Promise<Type | undefined> {
    return this.typeModel.findOne({ _id: id });
  }

  /**
   * 根据name查找类型
   *
   * @param {string} info
   * @returns {Promise<Type[]>}
   * @memberof TypesService
   */
  async findByName(name: string): Promise<Type[]> {
    // 不区分大小写
    return this.typeModel.findOne({ name: name });
  }

  /**
   * 根据ID删除单个类型
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof TypesService
   */
  async deleteOne(id: string): Promise<any> {
    return this.typeModel.deleteOne({ _id: id });
  }

  /**
   * 修改名称
   *
   * @param {string} id
   * @param {string} color
   * @returns {Promise<any>}
   * @memberof TypesService
   */
  async changeName(changeNameDto: ChangeNameDto): Promise<any> {
    return await this.typeModel.findOne({_id: changeNameDto._id}).then(type => {
      return type.update({name: changeNameDto.name});
    })
  }

  /**
   * 修改颜色
   *
   * @param {string} id
   * @param {string} color
   * @returns {Promise<any>}
   * @memberof TypesService
   */
  async changeColor(changeColorDto: ChangeColorDto): Promise<any> {
    return await this.typeModel.findOne({_id: changeColorDto._id}).then(type => {
      return type.update({color: changeColorDto.color});
    })
  }
}

