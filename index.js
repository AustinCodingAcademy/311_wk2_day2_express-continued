const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const port = process.env.PORT || 4001;

app.use(express.static(path.join(__dirname, 'public')));


app.use('/comments', require('./routes/comments'))
app.use('/contacts', require('./routes/contacts'))
app.use('/products', require('./routes/products'))
app.use('/vehicles', require('./routes/vehicles'))


app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
