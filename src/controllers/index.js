var path = require('path')
var glob = require('glob')

function lowerFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function getNsByPath(filePath,basePath){
    filePath = path.relative(basePath,filePath)
    var filePaths = filePath.split(path.sep)
    var len = filePaths.length
    var fileName = filePaths[len-1]

    filePaths[len-1] = fileName.substr(0,fileName.indexOf("Controller.js"))

    return filePaths.map(function(item){
        return lowerFirstLetter(item)
    }).join("/")
}

var controllerBasePath = __dirname
function getRouterObj(file){
    var routerObj = require(file)
    var ns = routerObj.ns === undefined?getNsByPath(file,controllerBasePath):routerObj.ns
    if(ns.charAt(0)!=='/'){ns='/'+ns}
    routerObj.ns = ns
    return routerObj
}

function getRouterMap(){
    var routerMap={}
    var controllerFiles = glob.sync(controllerBasePath+'/**/*Controller.js');
    for(var i = 0;i<controllerFiles.length;i++){
        var cFile = controllerFiles[i]
        var routerObj = getRouterObj(cFile)
        var ns = routerObj.ns
        if(ns in routerMap){
            throw new Error("ns of router conflict:" + ns)
        }
        routerMap[ns] = routerObj.router
    }
    return routerMap
}

module.exports = getRouterMap()