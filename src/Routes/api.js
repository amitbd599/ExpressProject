const express = require("express");
const productController = require("../Controllers/productController");

const router = express.Router();

//! ================ create new product Api =================
router.post("/create-product", productController.createProduct);

//! ================ Read All Products ================
router.get("/read-product", productController.getAllProducts);

//! ================ Read single Products ================
router.get("/read-single-product/:id", productController.getSingleProducts);

//! ================ Delete Products ================
router.delete("/delete-product/:id", productController.deleteProduct);

//! ================ Update Products ================
router.post("/update-product/:id", productController.updateProduct);

module.exports = router;
