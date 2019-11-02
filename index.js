const express = require("express");
// creates express app
const app = express();


const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(express.static('public'))



const port = process.env.PORT || 4001;
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
