import { product } from "../models/products.js"

export const idProduct = async (req,res) => {
    try{
        const { id } = req.params;
        if(id){
            const info = await product.findAll({
                where: {
                        id: id
                }
            })
          res.status(200).json(info);
        }
    } catch (error){
        res.status(404).json({error: error.message});
    }
};
