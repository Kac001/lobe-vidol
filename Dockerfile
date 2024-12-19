# 使用 Node.js 20.18.1 的 Alpine 镜像作为基础镜像
FROM node:20.18.1-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 bun.lockb 到工作目录
COPY package.json bun.lockb ./

# 安装依赖
RUN npm install -g bun
RUN bun install

# 复制项目代码到工作目录
COPY . .

# 执行构建
RUN bun run build

# 暴露端口
EXPOSE 3000

# 设置环境变量
ENV NODE_ENV production

# 启动应用
CMD ["bun", "run", "start"]
