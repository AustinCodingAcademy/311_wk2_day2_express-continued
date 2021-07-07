const express = require("express");
const app = express();
const bodyParser = require("body-parser")
// const contacts = require('./data/contacts')
// const vehicles = require('./data/vehicles')
// const comments = require('./data/comments')
// const products = require('./data/products')
const contacts = require('./routers/contacts')
const vehicles = require('./routers/vehicles')
const comments = require('./routers/comments')
const products = require('./routers/products')
const port = process.env.PORT || 4001;


app.use(express.static('public'))
app.use(bodyParser.json())
app.use(contacts)
app.use(vehicles)
app.use(comments)
app.use(products)

//*********CODE HERE******** */

//Create express routes to get all things

// app.get('/contacts', (req, res) => {
    // res.json(contacts)
//})

// app.get('/vehicles', (req, res) => {
//     res.json(vehicles)
//   })

// app.get('/comments', (req, res) => {
//     res.json(comments)
//   })

// app.get('/products', (req, res) => {
//     res.json(products)
//   })


//Create express routes to get one thing

// app.get('/contacts/:id', (req, res) => {
//     let getId = contacts.find(user => user._id === parseInt(req.params.id))
//     res.json(getId)
//   })

// app.get('/vehicles/:id', (req, res) => {
//     let getId = vehicles.find(user => user._id === parseInt(req.params.id))
//     res.json(getId)
//   })

// app.get('/comments/:id', (req, res) => {
//     let getId = comments.find(user => user._id === parseInt(req.params.id))
//     res.json(getId)
//   })

// app.get('/products/:id', (req, res) => {
//     let getId = products.find(user => user._id === parseInt(req.params.id))
//     res.json(getId)
//   })

//Create express routes to create one thing

// app.post('/contacts', (req, res) => {
//     const newContact = {
//         _id: req.body._id,
//         name: req.body.name,
//         occupation: req.body.occupation,
//         avatar: req.body.avatar
//     }
    
//     contacts.push(newContact)
//     res.json(contacts)
    
//     })

// app.post('/vehicles', (req, res) => {
//     const newVehicle = {
//         _id: req.body._id,
//         imgUrl: req.body.imgUrl,
//         year: req.body.year,
//         make: req.body.make,
//         model: req.body.model,
//         price: req.body.price,
//         km: req.body.km,
//         miles: req.body.miles,
//         fuel: req.body.fuel,
//         city: req.body.city,
//         isNew: req.body.isNew
//     }
        
//     vehicles.push(newVehicle)
//     res.json(vehicles)
        
//     })

// app.post('/comments', (req, res) => {
//     const newComments = {
//         _id: req.body._id,
//         body: req.body.body,
//         postId: req.body.postId
//     }
        
//     comments.push(newComments)
//     res.json(comments)
        
//     })

// app.post('/products', (req, res) => {
//     const newProducts = {
//         _id: req.body._1,
//         name: req.body.name,
//         description: req.body.name,
//         rating: req.body.rating,
//         imgUrl: req.body.imgUrl,
//         price: req.body.price,
//         category: req.body.category,
//         reviews: req.body.reviews [
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             },
//             {
//                 description: req.body.description,
//                 rating: req.body.rating
//             }
//         ]
//     }
        
//     products.push(newProducts)
//     res.json(products)
        
//     })

  app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
