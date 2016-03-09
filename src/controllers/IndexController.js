var Q = require('q')
var router = require('express').Router();
var path = require('path')

router.get('/',async function(req,res){
    var reactMarkUp = g_reactViewEngine.renderToStaticMarkup("index")
    var fs = require('fs')
    var readFile = Q.denodeify(fs.readFile);
    var text = await readFile(path.join(__dirname,"./foo.txt"), "utf-8");
    console.log(text)
    console.log(text)
    res.render('index',{
        title:"test",
        react:reactMarkUp
    })
})

module.exports = {
    router:router,
    ns:""
}