const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

// GET routes
router.get('/data/comments', commentsController.list);

router.get('/data/comments/:id', commentsController.show);

// POST routes
router.post('/data/comments', commentsController.create);

module.exports = router;