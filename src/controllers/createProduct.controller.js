import { product } from '../models/products.js'

export const createProduct = async (req, res) => {
    try {
        const { id, title, price, stock, categories, description } = req.body;
        if (!title || !price || !stock || !categories) throw new Error("bad request");

        let newProduct = {};

        if (id && description) {
            newProduct = await product.create({
                id,
                title,
                price,
                stock,
                categories,
                description
            })
        } else if (id) {
            newProduct = await product.create({
                id,
                title,
                price,
                stock,
                categories
            })
        } else {
            newProduct = await product.create({
                title,
                price,
                stock,
                categories,
                description
            })
        };

        res.status(201).json({ newProduct });
    } catch (error) {
        res.status(400).json({ error: error.message })
    };
};