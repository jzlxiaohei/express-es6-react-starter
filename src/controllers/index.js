const path = require('path')
const glob = require('glob')

function lowerFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function getNsByPath(filePath, basePath) {
    const absFilePath = path.relative(basePath, filePath)
    const absFilePaths = absFilePath.split(path.sep)
    const len = absFilePaths.length
    const fileName = absFilePaths[len - 1]

    absFilePaths[len - 1] = fileName.substr(0, fileName.indexOf('Controller.js'))

    return absFilePaths
        .map((item) => lowerFirstLetter(item))
        .join('/')
}

const controllerBasePath = __dirname
function getRouterObj(file) {
    const routerObj = require(file)
    let ns = routerObj.ns === undefined ? getNsByPath(file, controllerBasePath) : routerObj.ns
    if (ns.charAt(0) !== '/') {
        ns = '/' + ns
    }
    routerObj.ns = ns
    return routerObj
}

function getRouterMap() {
    const routerMap = {}
    const controllerFiles = glob.sync(controllerBasePath + '/**/*Controller.js');
    for (let i = 0; i < controllerFiles.length; i++) {
        const cFile = controllerFiles[i]
        const routerObj = getRouterObj(cFile)
        const ns = routerObj.ns
        if (ns in routerMap) {
            throw new Error('ns of router conflict:' + ns)
        }
        routerMap[ns] = routerObj.router
    }
    return routerMap
}

module.exports = getRouterMap()
