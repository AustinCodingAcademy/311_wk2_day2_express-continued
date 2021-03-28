
const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const contactsRouter = require('./routers/contacts-routers')
const commentsRouter = require('./routers/comments-routers')
const productsRouter = require('./routers/products-routers')
const vehiclesRouter = require('./routers/vehicles-routers')
const port = process.env.PORT || 4001;


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactsRouter)
app.use(commentsRouter)
app.use(productsRouter)
app.use(vehiclesRouter)


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});




