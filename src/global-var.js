var path = require("path")
var config = require('../config')
var Logger = require('./utils/logger')
var ReactEngine = require("../react-view-engine")


var engine = new ReactEngine(
    path.join(__dirname, "./components"),
    {isProduction: config.isProduction}
)

global.$reactViewEngine = engine
global.$asyncWrapper = function (fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
};


global.$log = new Logger()