/*
 * @description: 标签路由控制
 * @author: zpl
 * @Date: 2020-02-18 12:54:15
 * @LastEditTime: 2020-02-21 20:00:40
 * @LastEditors: zpl
 */
import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { LableService } from './lable.service';
import { CreateLableDto } from './dto/create-lable-dto';
import { Lable } from './interfaces/lable.interface';
import { ChangeNameDto } from './dto/change-name-dto';
import { ChangeColorDto } from './dto/change-color-dto';

@Controller('lable')
export class LableController {
  constructor(private readonly typesService: LableService) { }

  /**
   * 创建类型
   *
   * @param {CreateLableDto} createLableDto
   * @memberof LablesController
   */
  @Post()
  async createLable(@Body() createLableDto: CreateLableDto) {
    await this.typesService.create(createLableDto);
  }

  /**
   * 查找所有类型
   *
   * @returns {Promise<Lable[]>}
   * @memberof LablesController
   */
  @Get()
  async findAll(): Promise<Lable[]> {
    return this.typesService.findAll();
  }

  /**
   * 根据ID查找单个类型
   *
   * @param {string} id
   * @returns {Promise<Lable>}
   * @memberof LablesController
   */
  @Get('/byId/:id')
  async findById(@Param('id') id: string): Promise<Lable> {
    return this.typesService.findOne(id);
  }

  /**
   * 根据name查找类型
   *
   * @param {string} name
   * @returns {Promise<Lable[]>}
   * @memberof LablesController
   */
  @Get('/byInfo/:name')
  async findByInfo(@Param('name') name: string): Promise<Lable[]> {
    return this.typesService.findByName(name);
  }

  /**
   * 根据ID删除单个类型
   *
   * @param {string} id
   * @returns {Promise<any>}
   * @memberof LablesController
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
