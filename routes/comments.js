const express = require('express');
const router = express.Router();
const CommentsControllers = require('../controllers/comments');


router.get('/comments', CommentsControllers.list);

router.get('/comments/:id', CommentsControllers.show);
 
router.post('/comments', CommentsControllers.create);
 
module.exports = router;