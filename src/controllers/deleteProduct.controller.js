import { product } from "../models/products.js";
import { deleteImg } from "../cloudinary/cloudinary.js";

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await product.findByPk(id);
        if (!deleteProduct) throw new Error("Bad request.");
        if(deleteProduct.image){
            await deleteImg(deleteProduct.url)
        }
        await deleteProduct.destroy();
        res.status(202).json({ msg: "accepted." })
    } catch (error) {
        res.status(400).json({ error: error.message })
    };
};
