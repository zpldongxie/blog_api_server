/*
 * @description: 全局配置
 * @author: zpl
 * @Date: 2020-01-02 11:46:36
 * @LastEditTime: 2020-02-18 13:27:23
 * @LastEditors: zpl
 */
export default () => {
  console.log(`use ${process.env.NODE_ENV} configurations.`);
  return {
    port: parseInt(process.env.PORT) || 3000,
    database: {
      host: process.env.MONGODB_HOST || '127.0.0.1',
      port: parseInt(process.env.MONGODB_PORT, 10) || 27017,
      name: process.env.MONGODB_NAME || 'blog_manager'
    }
  }
};