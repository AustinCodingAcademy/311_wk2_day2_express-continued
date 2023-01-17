const express = require("express");
// const bodyParser = require("body-parser");
const app = express();
const { contacts, comments, vehicles, products } = require('./data')
const routes = require('./routes')

app.use(express.json());
app.use(express.static('public'));
app.use(routes);

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
