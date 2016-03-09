var Promise = require('bluebird')
var router = require('express').Router();
var path = require('path')

var fs = require('fs')
var readFile = Promise.promisify(fs.readFile);

router.get('/',$asyncWrapper(async function(req,res){

    var reactMarkUp = $reactViewEngine.renderToStaticMarkup("index")

    var text = await readFile(path.join(__dirname,"./foo.txt"), "utf-8");

    res.render('index',{
        title:text,
        react:reactMarkUp
    })
}))

module.exports = {
    router:router,
    ns:""
}