#front-end:
  [ant.design starter](https://github.com/jzlxiaohei/react-antd-starter)
  
#back-end
##dev
  首先
    npm i -g gulp nodemon babel-cli

  开发的时候使用,babel-node,命令npm run dev

##deploy  
    发布: make deploy(查看makefile里命令)

##feature  
  支持async/await以及各种es6,7的语法
    
  jade + react-server-render
  
  controllers: 必须为xxController.js的格式,返回express.Router(),如果没有ns自动,自动根据 路径和命名
    
        xx/yy/zzController.js => 路由 /xx/yy/zz
        
##roadmap
  swagger-support      

