const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const { list, getOne, post} = require('../controllers/products')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

let counter = 1;

router.get('/products',list)

router.get('/products/:productId',getOne)

router.post('/products',post)

module.exports = router