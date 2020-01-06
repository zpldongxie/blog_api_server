# blog_api_server

个人博客api服务

# 代码结构

```
├── env                                         # 环境变量
│
├── src
│   │
│   ├── auth                                    # 认证模块
│   │
│   ├── common                                  # 公共代码
│   │     │
│   │     ├── interceptor                       # 全局拦截器
│   │     │       │
│   │     │       ├── errors.interceptor.ts     # 异常拦截器
│   │     │       │
│   │     │       ├── logging.interceptor.ts    # 日志拦截器
│   │     │       │
│   │     │       ├── timeout.interceptor.ts    # 访问超时拦截器
│   │     │       │
│   │     │       └── transform.interceptor.ts  # 数据封闭拦截器
│   │     │
│   │     ├── middleware                        # 中间件
│   │     │       │
│   │     │       └── logger.middleware.ts      # 日志
│   │     │
│   │     ├── roles.decorator.ts                # 用户验证装饰器
│   │     │
│   │     └── roles.guard.ts                    # 认证保护
│   │
│   ├── confg                                   # 全局配置                  
│   │
│   ├── custom-mongoose                         # mongodb连接模块
│   │
│   ├── users                                   # 用户模块
│   │
│   ├── app.controller.ts                       # 主路由
│   │
│   ├── app.module.ts                           # 主模块控制
│   │
│   ├── app.service.ts                          # 主服务
│   │
│   └── main.ts                                 # 应用主入口
│
├── views                                       # 页面模板
│   │
│   ├── layouts                                 # 通用布局
│   │
│   └── index.hbs                               # 主页
│
├── README.md
│
└── package.json
```

# nest 框架基本使用说明
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>  

```
nest new blog_api_server        # 创建项目
nest g module cats              # 封装一个module，在根module中导入
nest g controller cats          # 新建控制器
nest g service cats             # 创建对应的服务
```
应该使用interface来维护对象，使用dto来约束传递的参数。

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest 是 [MIT licensed](LICENSE).
