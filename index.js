const express = require("express");
const bodyParser = require("body-parser");

const commentRouter = require('./routes/comments')
const contactRouter = require('./routes/contacts')
const productsRouter = require('./routes/products')
const vehicleRouter = require('./routes/vehicles')

const app = express();

app.use(commentRouter)
app.use(contactRouter)
app.use(productsRouter)
app.use(vehicleRouter)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
})