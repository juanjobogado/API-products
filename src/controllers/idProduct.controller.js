import { product } from "../models/products.js"
import { Op } from "sequelize";

export const idProduct = async (req,res) => {
    try{
        const { id } = req.params;
        await get();
        if(id){
            const info = await product.findAll({
                where: {
                    id: {[Op.iLike]: `%${id}%`}
                }
            })
          res.status(201).json(info);
        }
    } catch (error){
        res.status(404).json({error: error.message});
    }
};
