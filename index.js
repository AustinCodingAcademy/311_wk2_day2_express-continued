const express = require("express");
app.use(express.static('public'));
const bodyParser = require("body-parser");

const dataContacts = require("./data/contacts");
const dataVehicles = require("./data/vehicles");
const dataComments = require("./data/comments");
const dataProducts = require ("./data/products");


const commentRouter = require("./routers/comments");
const contactRouter = require("./routers/contacts");
const vehiclesRouter = require("./routers.vehicles");
const productsRouter = require("./reouters/products");



const app = express();

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

