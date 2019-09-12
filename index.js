const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let vehicleRoutes = require('./routes/vehicles')

app.use(vehicleRoutes)



const port = process.env.PORT || 4001;

//pulling in additional js files for organization's sake
app.use('/', express.static('public'));

//using body-parser to serve json-style
app.use(bodyParser.json());

//puting listening port down here
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
