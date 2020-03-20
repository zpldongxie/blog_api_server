/*
 * @description: 类型表
 * @author: zpl
 * @Date: 2020-02-18 12:50:42
 * @LastEditTime: 2020-02-21 19:57:40
 * @LastEditors: zpl
 */
import * as mongoose from 'mongoose';

export const LableSchema = new mongoose.Schema({
  name: String  ,
  color: String
});