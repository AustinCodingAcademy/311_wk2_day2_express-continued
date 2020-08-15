const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const contactsRouter = require('./routers/contacts-routers')
const commentsRouter = require('./routers/comments-router')

const port = process.env.PORT || 4001;
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contactsRouter)
app.use(commentsRouter)



app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});




