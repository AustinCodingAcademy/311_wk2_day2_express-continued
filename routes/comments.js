const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments')
//const {list,show,create,update,remove} = require('../controllers/comments')

//commentS
router.get('/comments', commentsController.list)
router.get('/comment/:id', commentsController.show)
router.post('/comments', commentsController.create)
// router.put('/comments', update)
// router.delete('/comments', remove)

module.exports = router;