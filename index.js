const express = require("express");
const bodyParser = require("body-parser");

const contactsRouter = require('./routes/contacts');
const vehiclesRouter = require('./routes/vehicles');
const commentsRouter = require('./routes/comments');
const productsRouter = require('./routes/products');

const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/contacts', contactsRouter);
app.use('/vehicles', vehiclesRouter);
app.use('/comments', commentsRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
