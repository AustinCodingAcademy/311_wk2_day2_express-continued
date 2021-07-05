const express = require("express");
const products = require("./routers/products")
const vehicles = require("./routers/vehicles")
const contacts = require("./routers/contacts")
const comments = require("./routers/comments")
const app = express();


const port = process.env.PORT || 4001;

app.use(products)
app.use(vehicles)
app.use(contacts)
app.use(comments)



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
