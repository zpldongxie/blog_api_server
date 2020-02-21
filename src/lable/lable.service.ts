/*
 * @description: 标签接口服务
 * @author: zpl
 * @Date: 2020-02-18 12:54:27
 * @LastEditTime: 2020-02-21 20:00:18
 * @LastEditors: zpl
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Lable } from './interfaces/lable.interface';
import { CreateLableDto } from './dto/create-lable-dto'
import { ChangeNameDto } from './dto/change-name-dto';
import { ChangeColorDto } from './dto/change-color-dto';
import { UpdateLableDto } from './dto/update-lable-dto';

@Injectable()
export class LableService {
  constructor(@InjectModel('Lable') private readonly typeModel: Model<Lable>) { }

  /**
   * 创建标签
   *
   * @param {CreateLableDto} createLableDto
   * @returns {Promise<Lable>}
   * @memberof LablesService
   */
  async create(createLableDto: CreateLableDto): Promise<Lable> {
    const createdLable = new this.typeModel(createLableDto);
    return await createdLable.save();
  }


  /**
   * 更新标签信息
   *
   * @param {UpdateLableDto} updateLableDto
   * @returns {Promise<Lable>}
   * @memberof LablesService
   */
  async update(updateLableDto: UpdateLableDto): Promise<Lable> {
    return await this.typeModel.findOne({ _id: updateLableDto._id }).then(type => {
      return type.update(updateLableDto);
    });
  }

  /**
   * 查询所有标签
   *
   * @returns {Promise<Lable[]>}
   * @memberof LablesService
   */
  async findAll(): Promise<Lable[]> {
    return await this.typeModel.find().exec();
  }

  /**
   * 根据ID查找标签
   *
   * @param {string} id
   * @returns {(Promise<Lable | undefined>)}
   * @memberof LablesService
   */
  async findOne(id: string): Promise<Lable | undefined> {
    return this.typeModel.findOne({ _id: id });
  }

  /**
   * 根据name查找标签
   *
   * @param {string} info
   * @returns {Promise<Lable[]>}
   * @memberof LablesService
   */
  async findByName(name: string): Promise<Lable[]> {
    // 不区分大小写
    return this.typeModel.findOne({ name: name });
  }

  /**
   * 根据ID删除单个标签
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof LablesService
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
