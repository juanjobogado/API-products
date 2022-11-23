import { product } from '../models/products.js'

export const createProduct = async (req, res) => {
    try {
        const { title, price, stock, categories, description, image } = req.body;
        if (!title || !price || !stock || !categories || !image) throw new Error("bad request");


        const newProduct = await product.create({
            title,
            price,
            stock,
            categories,
            description,
            image
        })

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message })
    };
};