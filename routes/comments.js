const express = require("express");
const router = express.Router();

const {list, show, create} = require('../controllers/comments');

router.get('/comments', list);
router.get('/comments/:id(\\d+)', show);
router.post('/comments', create);

module.exports = router;