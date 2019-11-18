const express = require("express");
var bodyParser = require('body-parser')

const commentRouter = require('./routers/comments')
const contactRouter = require('./routers/contacts')
const vehiclesRouter = require('./routers/vehicles')
const productsRouter = require('./routers/products')

const app = express();
const port = process.env.PORT || 4001;

app.use(express.static("public"));
app.use(bodyParser.json())

app.use(commentRouter)
app.use(contactRouter)
app.use(vehiclesRouter)
app.use(productsRouter)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});


