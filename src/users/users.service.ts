/*
 * @description: 用户操作服务类
 * @author: zpl
 * @Date: 2019-12-24 16:33:26
 * @LastEditTime : 2020-01-06 16:29:35
 * @LastEditors  : zpl
 */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user-dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  /**
   * 创建用户
   *
   * @param {CreateUserDto} createUserDto
   * @returns {Promise<User>}
   * @memberof UsersService
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }


  /**
   * 更新用户信息
   *
   * @param {CreateUserDto} createUserDto
   * @returns {Promise<User>}
   * @memberof UsersService
   */
  async update(createUserDto: CreateUserDto): Promise<User> {
    this.userModel
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  /**
   * 查询所有用户
   *
   * @returns {Promise<User[]>}
   * @memberof UsersService
   */
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  /**
   * 根据ID查找用户
   *
   * @param {string} id
   * @returns {(Promise<User | undefined>)}
   * @memberof UsersService
   */
  async findOne(id: string): Promise<User | undefined> {
    return this.userModel.findOne({ _id: id });
  }

  /**
   * 模糊查找用户
   *
   * @param {string} info
   * @returns {Promise<User[]>}
   * @memberof UsersService
   */
  async findByInfo(info: string): Promise<User[]> {
    // 不区分大小写
    const reg = new RegExp(info, 'i');
    return this.userModel.find({
      $or: [
        { name: { $regex: reg} },
        { mobilePhone: { $regex: reg} },
        { email: { $regex: reg} }
      ]
    });
  }

  /**
   * 查找所有管理员用户
   *
   * @returns {Promise<User[]>}
   * @memberof UsersService
   */
  async findAdmins(): Promise<User[]> {
    return this.userModel.find({ role: 0 });
  }

  /**
   * 查找所有非管理员用户
   *
   * @returns {Promise<User[]>}
   * @memberof UsersService
   */
  async findNotAdmins(): Promise<User[]> {
    return this.userModel.find({ role: 1 });
  }

  /**
   * 批量删除用户
   *
   * @param {Array<string>} ids
   * @returns {Promise<any>}
   * @memberof UsersService
   */
  async deleteMany(ids: Array<string>): Promise<any> {
    return this.userModel.deleteMany({ _id: { $in: ids } });
  }

  /**
   * 根据ID删除单个用户
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof UsersService
   */
  async deleteOne(id: string): Promise<any> {
    return this.userModel.deleteOne({ _id: id });
  }
}
