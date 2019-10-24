# vue-demo

## 目的
平时工作或者别的场景搭建个项目，用脚手架吧，可能不能拿来直接用(总觉得少点配套措施比如网络请求的封装，cookie的存取啊)。所以有这么一个项目。
目的是拷贝后直接你就能完成请求接口啊，mock数据啊这些常规操作，毕竟是实际用的，业务场景可能十个指头数不过来，但是，核心(vue系列)+配套(axios、mock等)的组合相比是你更需要的。

期待未来高可配，让我们把节省下来的时间，用来跑步、打球、吃大餐、喝酒聊天...

## 环境要求
```
vue --version // 3.10.0
node >= 8.12.0
```
## Project setup
```
npm i // 速度慢可以使用 yarn
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 说明

1. 依赖安装完即可运行 __npm run serve__ 浏览器自动打开界面。

2. 引用:
   1) 接口请求使用 __axio__;

   2) __cookie__ 操作直接引入 __component-cookie__;

   3) UI库可自己写，也可看引入的库文档写 [UI库](https://element.eleme.cn)

### 参考资料
1. [vue-cli](https://cli.vuejs.org) 
2. [mock](http://rap2.taobao.org/)
