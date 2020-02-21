/*
 * @description: 修改颜色参数
 * @author: zpl
 * @Date: 2020-02-18 13:11:29
 * @LastEditTime: 2020-02-21 15:56:13
 * @LastEditors: zpl
 */
import { IsString, Length, IsNotEmpty, IsMongoId } from 'class-validator';

export class ChangeColorDto {
  @IsMongoId()
  readonly _id: string;
  @IsString()
  readonly color: string;
}