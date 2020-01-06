/*
 * @description: 用户操作类
 * @author: zpl
 * @Date: 2020-01-04 14:59:00
 * @LastEditTime : 2020-01-06 16:18:16
 * @LastEditors  : zpl
 */
import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { DeleteUsersDto } from './dto/delete-users-dto';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /**
   * 创建用户
   *
   * @param {CreateUserDto} createUserDto
   * @memberof UsersController
   */
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
  }

  /**
   * 查找所有用户
   *
   * @returns {Promise<User[]>}
   * @memberof UsersController
   */
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /**
   * 根据ID查找单个用户
   *
   * @param {string} id
   * @returns {Promise<User>}
   * @memberof UsersController
   */
  @Get('/byId/:id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  /**
   * 模糊查找用户
   *
   * @param {string} info
   * @returns {Promise<User[]>}
   * @memberof UsersController
   */
  @Get('/byInfo/:info')
  async findByInfo(@Param('info') info: string): Promise<User[]> {
    return this.usersService.findByInfo(info);
  }

  /**
   * 根据ID删除单个用户
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof UsersController
   */
  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<any> {
    return this.usersService.deleteOne(id);
  }

  /**
   * 批量删除用户
   *
   * @param {DeleteUsersDto} deleteUsersDto
   * @returns {Promise<any>}
   * @memberof UsersController
   */
  @Post('/deleteMany')
  async deleteMany(@Body() deleteUsersDto: DeleteUsersDto): Promise<any> {
    return this.usersService.deleteMany(deleteUsersDto.ids);
  }
}
