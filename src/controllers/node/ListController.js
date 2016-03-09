var router = require('express').Router();

router.get('/',function(req,res){
    res.end('node list')
})

module.exports={
    router:router
}