/*
 * @description: 用户接口类
 * @author: zpl
 * @Date: 2019-12-24 16:39:39
 * @LastEditTime : 2020-01-04 17:28:04
 * @LastEditors  : zpl
 */
import { Document } from 'mongoose'

export interface User extends Document {
  userName: string;
  password: string;
  role: number
}
