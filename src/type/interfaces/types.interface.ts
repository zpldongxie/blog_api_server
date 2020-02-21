/*
 * @description: 类型接口类
 * @author: zpl
 * @Date: 2020-02-18 13:09:54
 * @LastEditTime: 2020-02-21 15:04:24
 * @LastEditors: zpl
 */
import { Document } from 'mongoose'

export interface Type extends Document {
  name: string;
  color: string;
}