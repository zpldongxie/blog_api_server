/*
 * @description: 类型表
 * @author: zpl
 * @Date: 2020-02-18 12:50:42
 * @LastEditTime: 2020-02-21 15:04:42
 * @LastEditors: zpl
 */
import * as mongoose from 'mongoose';

export const TypeSchema = new mongoose.Schema({
  name: String,
  color: String
});