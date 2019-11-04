const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'))
app.use(bodyParser.json())
app.use('../data/contacts')
app.use('../data/vehicles')
app.use('../data/products')
app.use('../data/comments')










app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
