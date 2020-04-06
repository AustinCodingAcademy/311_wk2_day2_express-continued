const products = require ('../data/products')
productCounter = products.length

const list =  (req, res) => {
    return res.json(products);
   }

   const show =  (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product._id === Number(id))
    res.json(product)
   }

   const create = (req, res) =>{
    let newProduct = {
        _id: productCounter + 1,
        name: req.body.name,
        description: req.body.description,
        
    }
    products.push(newProduct)
}

module.exports = {
    list,
    show,
    create
}