// routes/routesComments.js
const express = require('express');
const router = express.Router();
let controllerComments = require('../controller/controllerComments');

router.get('/', controllerComments.commentsGet);
router.get('/:id', controllerComments.commentsGetId);
router.post('/', controllerComments.commentsPost);
router.put('/:id', controllerComments.commentsPut);
router.delete('/:id', controllerComments.commentsDelete);

module.exports = router;