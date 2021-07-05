const express = require('express');
const router = express.Router();
let commentController = require('../controllers/comments')

router.get('/', commentController.list)
  
router.get('/:id', commentController.show)

router.post('/', commentController.create)
  
module.exports = router;