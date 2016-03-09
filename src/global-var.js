var path = require("path")
var config = require('../config')
var ReactEngine = require("../react-view-engine",{isProduction:config.isProduction})
var engine = new ReactEngine(path.join(__dirname,"./components"))

global.g_reactViewEngine = engine