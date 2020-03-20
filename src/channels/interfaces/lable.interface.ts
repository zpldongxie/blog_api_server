/*
 * @description: 标签接口类
 * @author: zpl
 * @Date: 2020-02-18 13:09:54
 * @LastEditTime: 2020-02-21 19:57:01
 * @LastEditors: zpl
 */
import { Document } from 'mongoose'

export interface Lable extends Document {
  name: string;
  color: string;
}