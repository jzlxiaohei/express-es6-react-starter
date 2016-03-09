var Promise = require('bluebird')
var router = require('express').Router();
var path = require('path')

var fs = require('fs')
var readFile = Promise.promisify(fs.readFile);

router.get('/',async function(req,res){
    var reactMarkUp = g_reactViewEngine.renderToStaticMarkup("index")

    var text = await readFile(path.join(__dirname,"./foo.txt"), "utf-8");
    console.log(text)
    res.render('index',{
        title:"test",
        react:reactMarkUp
    })
})

module.exports = {
    router:router
}