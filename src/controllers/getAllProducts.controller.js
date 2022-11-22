import { product } from "../models/products.js"
import { Op } from "sequelize";

export const getAllProducts = async (req, res) => {
  try {
    const name = req.query.title;
    console.log(name)
    if(!name){
      let data = await product.findAll();
      if (!data.length) return res.status(404).json("Products not found")
  
      res.status(200).json(data);  
    } else {
      const info = await product.findAll({
        where: {
                title: {[Op.iLike]: `%${name}%`}
        }
    })
  res.status(201).json(info);
    }
    
  } catch (error) {
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};