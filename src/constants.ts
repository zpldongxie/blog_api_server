/*
 * @description: 全局常量
 * @author: zpl
 * @Date: 2019-12-31 11:08:22
 * @LastEditTime: 2020-03-18 10:47:17
 * @LastEditors: zpl
 */

 // 注入config配置的令牌名称
export const CONFIG_OPTIONS = 'CONFIG_OPTIONS';

// 用户权限
export enum ROLE {
  admin = 0,
  user = 1
};

export enum channelType {
  mainPage = '主页', 
  articleList = '文章列表', 
  pictureList = '图片列表', 
  videoList = '视频列表'
}