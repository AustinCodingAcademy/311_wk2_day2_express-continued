const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");

const { list, getOne, post} = require('../controllers/comments')

router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json())

router.get('/comments',list)
router.get('/comments/:commentId',getOne)
router.post('/comments',post)

module.exports =router