const router = require('express').Router()
const list = require('../../models/number.model')
const listController = require('./list.controller')

router.get('/', listController.get)
router.put('/', listController.edit)
router.post('/', listController.add)


module.exports = router