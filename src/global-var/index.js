const path = require("path")
const config = require('../../config')
const Logger = require('../utils/logger')
const ReactEngine = require("../../react-view-engine")
const ViewHelper = require("./view-helper")

const assetsPath = path.join(__dirname, '../webpack-assets.json')

module .exports = function initGlobalVar(app) {

    global.$reactViewEngine = new ReactEngine(
        path.join(__dirname, "../components"),
        {isProduction: config.isProduction}
    )

    global.$asyncWrapper = function (fn) {
        return function (req, res, next) {
            fn(req, res, next).catch(next);
        };
    };

    global.$log = new Logger()

    app.locals.$vh = new ViewHelper({
        assetsMapPath: assetsPath,
        isProduction: config.isProduction,
        prefix: '',
        devPath: ''
    })
}
