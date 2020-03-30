const express = require('express');
// setup our router
const router = express.Router();

// set access to the controller we'll use
const controller = require('../controllers/comments');

// define the routes for the controller

// get all comments
router.get('/comments', controller.list);

// get one individual comment
router.get('/comments/:id', controller.show)

// add a comment
router.post('/comments',controller.create)

// make the router available to the API
module.exports = router