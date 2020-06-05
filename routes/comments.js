const express = require('express');
const router = express.Router();
const { list } = require('../controllers/comments.js');

router.get('/comments', list);

router.get('/comments/{id}', list);

module.exports = router;