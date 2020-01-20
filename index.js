const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.use(express.static('public'));

app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

app.use(bodyParser.json());
