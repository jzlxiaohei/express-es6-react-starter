const router = require('express').Router();

router.get('/', (req, res) => {
    res.end('node list')
})

module.exports = {
    router
}
