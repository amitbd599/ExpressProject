const express = require("express");
const userController = require("../Controllers/userController");
const productController = require("../Controllers/productController");

const router = express.Router();

//! ================ Register New User Api =================
router.get("/register", userController.register);


//! ================ create new product Api =================
router.get("/create-product", productController.createProduct);


router.get("/read-product", productController.readProduct);

 




module.exports = router;
