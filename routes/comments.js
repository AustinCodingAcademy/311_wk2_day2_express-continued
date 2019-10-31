const express = require('express');
const router = express.Router();
const commController = require('../controllers/comments');

router.get('/comments', commController.list);
router.get('/comments:id', commController.show);
router.post('/comments', commController.create);



module.exports = router;

