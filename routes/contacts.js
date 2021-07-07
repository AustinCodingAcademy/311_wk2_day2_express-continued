const express = require('express');
const router = express.Router();
const contController = require('../controllers/contacts');

router.get('/contacts', contController.list);
router.get('/contacts:id', contController.show);
router.post('/contacts', contController.create);



module.exports = router;
