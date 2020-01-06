/*
 * @description: 
 * @author: zpl
 * @Date: 2019-12-31 18:05:50
 * @LastEditTime: 2019-12-31 18:05:58
 * @LastEditors: zpl
 */
import * as mongoose from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});