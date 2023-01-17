const express = require("express");
const router = express.Router();
const contactsRouter = require('./contacts')
const commentsRouter = require('./comments')
const vehiclesRouter = require('./vehicles')
const productsRouter = require('./products')

router.get('/contacts', contactsRouter);
router.get('/contacts/:id', contactsRouter);
router.post('/contacts', contactsRouter);

router.get('/comments', commentsRouter);
router.get('/comments/:id', commentsRouter);
router.post('/comments', commentsRouter);

router.get('/products', productsRouter);
router.get('/products/:id', productsRouter);
router.post('/products', productsRouter);

router.get('/vehicles', vehiclesRouter);
router.get('/vehicles/:id', vehiclesRouter);
router.post('/vehicles', vehiclesRouter)

module.exports = router;