import { product } from "../models/products.js"

export const getAllProducts = async (req, res) => {
  try {
    let data = await product.findAll();
    if (!data.length) return res.status(404).json("Products not found")

    res.status(200).json(data);   
  } catch (error) {
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};