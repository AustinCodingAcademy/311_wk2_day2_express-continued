const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());

// contact 
app.use(require("./routes/contact.js"));

// vehicles
app.use(require("./routes/vehicles.js"));

// comments
app.use(require("./routes/comments.js"));

// products
app.use(require("./routes/products.js"));

// changed 4001 to 4000, port listening... 
const port = process.env.PORT || 4000;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
