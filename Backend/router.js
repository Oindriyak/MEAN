const router = require('express').Router()


router.use('/user', require('./api/user/user.router'))
router.use('/list', require('./api/list/list.router'))
// router.use('/text', require('./api/text/text.router'))
//
router.use('/', (req, res) => {
    res.send('<h1 style="color:red;">Welcome to To-Do App</h1>')
})

module.exports = router