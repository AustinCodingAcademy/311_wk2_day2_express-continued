const express = require("express");
const bodyParser = require("body-parser");

const commentRouter = require("./routers/comments");
const contactRouter = require("./routers/contacts");
const vehiclesRouter = require("./routers.vehicles");
const productsRouter = require("./reouters/products");



const app = express();

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
