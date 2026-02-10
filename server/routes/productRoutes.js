const express = require('express')
const { getProducts, getProduct, addProduct, updateProduct } = require('../controllers/productController')
const protect = require('../middleware/authMiddlewre')


const router = express.Router()


router.get("/", getProducts)
router.post("/", protect, addProduct)
router.get("/:id", getProduct)
router.put("/:id", protect, updateProduct)

module.exports = router