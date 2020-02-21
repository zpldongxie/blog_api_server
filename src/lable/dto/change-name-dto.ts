/*
 * @description: 修改名称参数
 * @author: zpl
 * @Date: 2020-02-18 13:11:29
 * @LastEditTime: 2020-02-21 15:56:24
 * @LastEditors: zpl
 */
import { IsString, Length, IsNotEmpty, IsMongoId } from 'class-validator';

export class ChangeNameDto {
  @IsMongoId()
  readonly _id: string;
  @IsNotEmpty({message: '类型名称不能为空。'})
  @IsString()
  @Length(1, 20, { message: '类型名称必须为长度1-20的字符串。' })
  readonly name: string;
}