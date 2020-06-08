const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");

const { list, getOne, post } = require('../controllers/vehicles')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

let counter = 1

router.get('/vehicles',list)

router.get('/vehicles/:vehiclesID',getOne)

router.post('/vehicles',post)

module.exports = router