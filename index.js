const app = express();
const express = require("express");
const bodyParser = require("body-parser");
const contactRouter = require('./routers/contacts-routers');
const commentsRouter = require('./routers/comments.routers');
const vehiclesRouter = require('./routers/vehicles.routers');
const productsRouter = require('./routers/products.routers');
const port = process.env.PORT || 4001;



app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactRouter)
app.use(commentsRouter)
app.use(vehiclesRouter)
app.use(productsRouter)

//  Line 6 allows express to call the static HTML for public eye //



// Gets the contacts

// This always goes to the bottom to read everythig ABOVE!! //
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});