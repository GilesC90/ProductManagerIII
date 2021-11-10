const ProductController = require('../controllers/product.controller')

module.exports = function(app) {
    app.get('/api', ProductController.index)
    app.get('/api/products', ProductController.findAllProduct)
    app.post('/api/products', ProductController.createProduct)
    app.get('/api/products/:id', ProductController.getProduct)
    app.put('/api/products/update/:id', ProductController.updateProduct)
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)
}

