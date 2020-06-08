const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");

const {list, getOne, post} = require('../controllers/contacts')
// const contactFunctions = require('../controllers/contacts')
// const listFunction = contactFunctions.list
// const getOneFunction = contactFunctions.getOne
// const postFunction = contactFunctions.post

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())



router.get('/contacts',list)

router.get('/contacts/:contactId',getOne)


router.post('/contacts',post)

module.exports = router