/*
 * @description: 用户验证装饰器
 * @author: zpl
 * @Date: 2019-12-23 17:25:09
 * @LastEditTime : 2019-12-23 17:33:06
 * @LastEditors  : zpl
 */
import { SetMetadata } from '@nestjs/common'

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);