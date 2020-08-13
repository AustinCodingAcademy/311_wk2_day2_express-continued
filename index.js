const express = require("express");
const bodyParser = require("body-parser");
const contactRouter = require('./routers/contacts-routers')

const app = express();
const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactRouter)
//  Line 6 allows express to call the static HTML for public eye //


// Gets the contacts

// This always goes to the bottom to read everythig ABOVE!! //
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});