const Promise = require('bluebird')
const router = require('express').Router()
const path = require('path')

const fs = require('fs')
const readFile = Promise.promisify(fs.readFile)

/* global $asyncWrapper, $reactViewEngine */

router.get('/', $asyncWrapper(async function (req, res) {
    const reactMarkUp = $reactViewEngine.renderToStaticMarkup('index')

    const text = await readFile(path.join(__dirname, './foo.txt'), 'utf-8');

    res.render('index', {
        title: text,
        react: reactMarkUp
    })
}))

module.exports = {
    router,
    ns: ''
}
