const express = require('express')
const router = express.Router()

//req controllers
const controllerComments = require('../controllers/controllerComments')

//Get Requests
router.get('/', controllerComments.list)
router.get('/:id', controllerComments.listById)

//Post Requests
router.post('/', controllerComments.post)

module.exports = router