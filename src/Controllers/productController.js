const mongoose = require("mongoose");
const productModel = require("../Models/productModel");
//! Create Product
exports.createProduct = async (req, res) => {
  try {
    let reqBody = req.body;
    let data = await productModel.create(reqBody);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(500).json({ status: "error", error: e.toString() });
  }
};

//! Get single Product
exports.getSingleProducts = async (req, res) => {
  let id = new mongoose.Types.ObjectId(req.params.id);

  try {
    let data = await productModel.aggregate([
      {
        $match: { _id: id },
      },
    ]);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(200).json({ status: "error", error: e.toString() });
  }
};

//! Get All Product
exports.getAllProducts = async (req, res) => {
  try {
    let data = await productModel.aggregate([
      {
        $project: {
          title: 1,
          short_des: 1,
          price: 1,
          discount: 1,
          discount_price: 1,
          image: 1,
          stock: 1,
          star: 1,
          remark: 1,
          createdAt: {
            $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
          },
          updatedAt: {
            $dateToString: { format: "%d-%m-%Y", date: "$createdDate" },
          },
        },
      },
    ]);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(200).json({ status: "error", error: e.toString() });
  }
};

//! Delete  Product

exports.deleteProduct = async (req, res) => {
  try {
    let id = new mongoose.Types.ObjectId(req.params.id);
    let query = { _id: id };
    // let data = await productModel.findOneAndRemove(query);
    let data = await productModel.deleteOne(query);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(200).json({ status: "error", error: e.toString() });
  }
};

//! Update Product

exports.updateProduct = async (req, res) => {
  try {
    let id = new mongoose.Types.ObjectId(req.params.id);
    let query = { _id: id };
    let reqBody = req.body;
    let data = await productModel.updateOne(query, reqBody);
    // let data = await productModel.findByIdAndUpdate(query, reqBody);
    // let data = await productModel.findOneAndUpdate(query, reqBody);
    res.status(200).json({ status: "success", data: data });
  } catch (e) {
    res.status(200).json({ status: "error", error: e.toString() });
  }
};
