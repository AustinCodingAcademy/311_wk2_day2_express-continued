const express = require('express')
const router = express.Router()

//Controller
const controllerProducts = require('../controllers/controllerProducts')

//Get requests
router.get('/', controllerProducts.list)
router.get('/:id', controllerProducts.listById)

//Post requests
router.post('/', controllerProducts.post)

module.exports = router