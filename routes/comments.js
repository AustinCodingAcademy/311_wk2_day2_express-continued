const express = require('express');
const router = express.Router();
const {displayComments, postComments, showComments} = require('../controllers/comments');


// app.get('/products', function(req, res){
//   res.json('../data/products')

// })

router.get('/comments', displayComments)

router.get('/comments/:id', showComments)

router.post('/comments', postComments)

module.exports = router