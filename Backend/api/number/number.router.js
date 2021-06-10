const router = require('express').Router()
const number = require('../../models/number.model')
const numberController = require('./number.controller')

router.get('/square', numberController.square)
router.patch('/updateSquare', numberController.updateSquare)
router.get('/findsquare', numberController.findSquare)
router.get('/cube', numberController.cube)
router.get('/palindrome', numberController.palindrome)
router.post('/post-square', numberController.postSquare)
router.delete('/delete-square', numberController.deleteSquare)

router.post('/login', numberController.login)

module.exports = router