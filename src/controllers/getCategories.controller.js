import { product } from "../models/products.js";
import { Op } from "sequelize"
export const getCategories = async(req, res) => {
    try{
        const categories = await product.findAll({
            attributes: ["id", "categories"],
            where:{
                id: ["1", "2", "3", "4", "5", "6", "7", "8"]
            }
        });
        
        
        res.status(200).json(categories)
    }catch(err){
        res.status(400).json({err: err.message})
    }
}