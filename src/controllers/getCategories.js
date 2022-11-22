import { product } from "../models/products.js";

export const getCategories = async(req, res) => {
    try{
        const categories = await product.findAll({
            attributes: ["categories"]
        });
        
        res.status(200).json(categories)
    }catch(err){
        res.status(400).json({err: err.message})
    }
}