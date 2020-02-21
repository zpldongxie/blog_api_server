/*
 * @description: 新增标签参数
 * @author: zpl
 * @Date: 2020-02-18 13:11:29
 * @LastEditTime: 2020-02-21 19:56:32
 * @LastEditors: zpl
 */
import { IsString, Length, IsNotEmpty } from 'class-validator';

export class CreateLableDto {
  @IsNotEmpty({message: '标签名称不能为空。'})
  @IsString()
  @Length(1, 20, { message: '标签名称必须为长度1-20的字符串。' })
  readonly name: string;
  @IsString()
  readonly color: string;
}