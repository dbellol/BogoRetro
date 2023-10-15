const express = require('express');
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } = require('../controller/productCtrl');
const router = express.Router();

router.post('/', createProduct);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/', getAllProduct);
module.exports=router;

