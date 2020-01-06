/*
 * @description: Data Transfer Object，数据传输对象，用于定义如何通过网络发送数据
 * @author: zpl
 * @Date: 2019-12-20 13:47:54
 * @LastEditTime : 2019-12-23 12:41:07
 * @LastEditors  : zpl
 */
import { IsString, IsInt, Length, Min, Max } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @Length(0, 20)
  readonly name: string;

  @IsInt()
  @Min(0)
  @Max(10)
  readonly age: number;

  @IsString()
  readonly breed: string;
}

export class UpdateCatDto {

}