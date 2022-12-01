import { product } from "../models/products.js"
import { Op } from "sequelize";

export const getAllProducts = async (req, res) => {
  try {
    const name = req.query.title;
    const minPrice = req.query.minPrice
    const maxPrice = req.query.maxPrice
    const orderAttribute = req.query.orderAttribute
    const orderDirection = req.query.orderDirection
    const categories = req.query.categories

    let conditions = {} //Order and Where
    let where = {} //Filters

    if (minPrice && maxPrice) where.price = { [Op.between]: [minPrice, maxPrice] }
    if (categories) where.categories = categories
    if (name) where.title = { [Op.iLike]: `%${name}%` }
    if (orderAttribute && orderDirection) conditions.order = [[orderAttribute, orderDirection]]
    if (where !== {}) conditions.where = where

    let data = await product.findAll(conditions);

    if (!data.length) return res.status(404).json({ msg: "Products not found" })

    res.status(200).json(data);

  } catch (error) {
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};
