const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//declaring routes
let commentRoute = require('./routes/comments')
let contactRoute = require('./routes/contacts')
let productRoute = require('./routes/products')
let vehicleRoute = require('./routes/vehicles')

// let commentControllers = require('./controllers/comments')
// let contactControllers = require('./controllers/contacts')
// let productControllers = require('./controllers/products')
// let vehicleControllers = require('./controllers/vehicles')



const port = process.env.PORT || 4000;

//pulling in additional js files for organization's sake
app.use('/', express.static('public'));


//using body-parser to serve json-style
app.use(bodyParser.json()); 

//middleware files, this links the files in the routes folder to this file. 
//The route folder files are stored in variables above.

app.use(commentRoute)
app.use(contactRoute)
app.use(productRoute)
app.use(vehicleRoute)

// app.use(commentControllers)
// app.use(contactControllers)
// app.use(productControllers)
// app.use(vehicleControllers)



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
