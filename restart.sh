#!/bin/env bash

# 更新代码和依赖
git pull && yarn install

# 重新打包
yarn run frontend:build && yarn run backend:build

# 运行代码
pm2 start ecosystem.config.js --env production
