/*
 * @description: 类型路由控制
 * @author: zpl
 * @Date: 2020-02-18 12:48:04
 * @LastEditTime: 2020-02-21 19:50:41
 * @LastEditors: zpl
 */
import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { TypeService } from './type.service';
import { Type } from './interfaces/types.interface';
import { CreateTypeDto } from './dto/create-type-dto';
import { ChangeNameDto } from './dto/change-name-dto';
import { ChangeColorDto } from './dto/change-color-dto';

@Controller('type')
export class TypeController {
  constructor(private readonly typesService: TypeService) { }

  /**
   * 创建类型
   *
   * @param {CreateTypeDto} createTypeDto
   * @memberof TypesController
   */
  @Post()
  async createType(@Body() createTypeDto: CreateTypeDto) {
    await this.typesService.create(createTypeDto);
  }

  /**
   * 查找所有类型
   *
   * @returns {Promise<Type[]>}
   * @memberof TypesController
   */
  @Get()
  async findAll(): Promise<Type[]> {
    return this.typesService.findAll();
  }

  /**
   * 根据ID查找单个类型
   *
   * @param {string} id
   * @returns {Promise<Type>}
   * @memberof TypesController
   */
  @Get('/byId/:id')
  async findById(@Param('id') id: string): Promise<Type> {
    return this.typesService.findOne(id);
  }

  /**
   * 根据name查找类型
   *
   * @param {string} name
   * @returns {Promise<Type[]>}
   * @memberof TypesController
   */
  @Get('/byInfo/:name')
  async findByInfo(@Param('name') name: string): Promise<Type[]> {
    return this.typesService.findByName(name);
  }

  /**
   * 根据ID删除单个类型
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof TypesController
   */
  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<any> {
    return this.typesService.deleteOne(id);
  }

  /**
   * 修改名称
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof TypesController
   */
  @Put('/changeName')
  async changeName(@Body() changeNameDto: ChangeNameDto): Promise<any> {
    return this.typesService.changeName(changeNameDto);
  }

  /**
   * 修改颜色
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof TypesController
   */
  @Put('/changeColor')
  async changeColor(@Body() changeColorDto: ChangeColorDto): Promise<any> {
    return this.typesService.changeColor(changeColorDto);
  }
}
