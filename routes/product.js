const express = require('express');
const { isAuth } = require('../middlewares/isAuth');
const { addProduct, getProducts, deleteProduct, editProduct, getOneProduct } = require('../controllers/product');


const productRoutes = express.Router();

productRoutes.post('/ajouter',isAuth,addProduct);
productRoutes.get('/products',getProducts);
productRoutes.delete('/delete/:id',isAuth,deleteProduct);
productRoutes.put('/modifier/:id',isAuth,editProduct);
productRoutes.get('/:id',getOneProduct);

module.exports = productRoutes;