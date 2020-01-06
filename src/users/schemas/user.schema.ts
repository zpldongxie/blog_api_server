/*
 * @description: 用户表
 * @author: zpl
 * @Date: 2020-01-04 16:40:55
 * @LastEditTime : 2020-01-06 16:20:11
 * @LastEditors  : zpl
 */
import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  name: String,
  sex: String,
  mobilePhone: String,
  email: String,
  role: Number
});