# 服务中心

服务中心, 提供一下服务器

* 事件中心 - 将事件分发给不同的服务器

## 如何使用

- 您的Node版本必须大于16.X, 输入````node -v````进行查看
- 您的系统必须包含yarn, 版本推荐1.22.x, 输入````yarn -v````进程查看

````
# 更新代码 - 可选
git pull
# 更新依赖包
yarn install

# 重新打包前后端项目
yarn run frontend:build && yarn run backend:build

# 运行代码 - development 环境
pm2 start ecosystem.config.js

# 运行代码 - production 环境
pm2 start ecosystem.config.js --env production

````

如果你在开发环境下, 还可以单独启动,而不依赖pm2

````
# 启动服务器 - 默认监听3000端口
yarn run backend:dev

# 启动客户端 - 默认连接到127.0.0.1:3000
yarn run frontend:dev

# 更多的启动命令请查看nestjs和quasar
````
