/*
 * @description: 删除多个用户参数
 * @author: zpl
 * @Date: 2020-01-04 15:17:19
 * @LastEditTime : 2020-01-06 15:45:29
 * @LastEditors  : zpl
 */
import { IsArray } from 'class-validator';

export class DeleteUsersDto {
  @IsArray()
  readonly ids: Array<string>;
}