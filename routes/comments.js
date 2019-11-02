const express = require('express');
const router  = express.Router();
const commentsController = require('../controllers/comments')

// const { list, show, create } = require('../routes/comments')

router.get('/comments', commentsController.list)
router.get('/comment/:id', commentsController.show)
router.post('/comments', commentsController.create)

// router.get( '/comments', (req, res) => {
// 	res.json( list() )
// })

// router.get( '/comments/:id', (req, res) => {
// 	res.json( show( req.params.id ) )
// })

// router.post( '/comments', (req, res) => {
// 	res.json( create( req.body ) )
// })

module.exports = router;