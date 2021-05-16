const express = require("express");
const app = express();
const contactsRouter = require('./routes/contacts')
const vehiclesRouter = require('./routes/vehicles')
const commentsRouter = require('./routes/comments')
const productsRouter = require('./routes/products')

app.use(contactsRouter)
app.use(vehiclesRouter)
app.use(commentsRouter)
app.use(productsRouter)

express.static('/public')



const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
