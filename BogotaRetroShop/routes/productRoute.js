const express = require('express');
const { createProduct, getProduct, getAllProduct } = require('../controller/productCtrl');
const router = express.Router();

router.post('/', createProduct);
router.get('/:id', getProduct);
router.get('/', getAllProduct);
module.exports=router;

