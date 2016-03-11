var config = require('../config')
var path = require('path')
var express = require('express')
var app = express()
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var _ = require("lodash")

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade')

if (config.isProduction) {
    app.enable('view cache');
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//init global variables
require("./global-var")

//initRouter
var routers = require("./controllers")
_.forIn(routers,function(val,key){
    //val is router ,key is namespace
    app.use(key,val)
})


if (config.isErrToPage) {
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        console.log(err)
        res.render('error', {
            message: err.message,
            error: JSON.stringify(err.stack).replace(/\\n/g,'<br>')
        });
    });
}else{
    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message:new Date()+":发生错误",
            error: {}
        });
    });
}

module.exports= app

//use to proxy api(java)

//var httpProxy = require('http-proxy');
//
//var apiProxy = httpProxy.createProxyServer();
//
//app.get("/api/*", function(req, res){
//    apiProxy.web(req, res, { target: 'http://google.com:80' });
//});