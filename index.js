const express = require("express");
const bodyParser = require("body-parser");
const comments = require("./data/comments"); //Importing the data we need
const contacts = require("./data/contacts"); //Importing the data we need
const products = require("./data/products"); //Importing the data we need
const vehicles = require("./data/vehicles"); //Importing the data we need
const commentsRouter = require("./routes/comments");
const contactsRouter = require("./routes/contacts");
const productsRouter = require("./routes/products");
const vehiclesRouter = require("./routes/vehicles");
const app = express();
app.use(express.json());




const port = process.env.PORT || 4001;

app.use(express.static('public'))

app.use(commentsRouter);
app.use(contactsRouter);
app.use(productsRouter);
app.use(vehiclesRouter);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
