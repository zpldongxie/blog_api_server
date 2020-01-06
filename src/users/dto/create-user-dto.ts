/*
 * @description: 新增用户参数
 * @author: zpl
 * @Date: 2020-01-04 15:17:19
 * @LastEditTime : 2020-01-06 15:06:20
 * @LastEditors  : zpl
 */
import { IsString, Length, IsMobilePhone, IsEmail, IsIn, IsEmpty } from 'class-validator';

import { ROLE } from '../../constants'

export class CreateUserDto {
  @IsString()
  @Length(4, 20, { message: '用户名为长度4-20的字符串。' })
  readonly userName: string;

  @IsString()
  @Length(6, 20, { message: '密码为长度6-20的字符串。' })
  password: string;

  @IsString()
  @Length(2, 20, { message: 'name必须为长度2-20的字符串。' })
  readonly name: string;

  @IsIn(['男', '女'], { message: 'sex必须是"男"或"女"' })
  readonly sex: string;

  @IsMobilePhone('zh-CN', { message: 'moilePhone必须是中国大陆手机号的字符串。' })
  readonly mobilePhone: string;

  @IsEmail({}, { message: 'email必须是邮件格式字符串。' })
  readonly email: string;

  @IsIn([ROLE.admin, ROLE.user], { message: '权限字段不符合规范。' })
  readonly role: number;
}