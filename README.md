#front-end:
  [ant.design starter](https://github.com/jzlxiaohei/react-antd-starter)
  
  使用打包好的ant.design（antd.js,antd.css）
  增加了`assets-webpack-plugin`生成静态文件map,通过view-helper管理静态文件
  
  
    cd src/public
    node devServer.js // localhost:9527,just dev frontend!!!
  
#back-end
##dev
  首先
     
     npm i -g gulp nodemon babel-cli

  复制 config.local.demo.js 到 config.local.js

  开发的时候使用命令 npm run dev

##deploy  
    发布: make deploy(查看makefile里命令)

    npm i -g pm2
    //log rotate 标准: 10M,一天
    pm2 install pm2 install pm2-logrotate
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:interval 1
    pm2 web (port :9615)
    
log使用pm2管理, 直接使用 `console.log`,`console.error`即可

##feature  
  支持async/await以及各种es6,7的语法
    
  jade + react-server-render
  
  controllers: 必须为xxController.js的格式,返回
    
    {
        router:express.Router(),//required
        ns:''//可选
    }
    
  如果没有`ns`,则自动根据 路径和命名
    
    xx/yy/zzController.js => 路由 /xx/yy/zz
        

##roadmap
  swagger-support      
    

