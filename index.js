const express = require("express");
var bodyParser = require('body-parser')
// const uuidv1 = require('uuid/v1');
const commentsRouter = require("./routes/comments")
// const contacts = require("./data/contacts")
// const products = require("./data/products")
// const vehicles = require("./data/vehicles")
const app = express();
const port = process.env.PORT || 4001;


app.use(express.static("public"));
app.use(bodyParser.json())
app.use(commentsRouter)


app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});


