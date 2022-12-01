// import { product } from '../models/products.js'

// export const createProduct = async (req, res) => {
//     try {
//         const { title, price, stock, categories, description, image } = req.body;
//         if (!title || !price || !stock || !categories || !image) throw new Error("bad request");


//         const newProduct = await product.create({
//             title,
//             price,
//             stock,
//             categories,
//             description,
//             image
//         })

//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     };
// };

import { product } from '../models/products.js'
import { uploadImage } from '../cloudinary/cloudinary.js';
import fs from "fs";

export const createProduct = async (req, res) => {
    try {

        const { title, price, stock, categories, description, image } = req.body;

        if (!title || !price || !stock || !categories || !description) throw new Error("bad request");

        let products = { title, price, stock, categories, description };

        const imageUploaded = await uploadImage(image[0]);
        let id = imageUploaded.public_id;
        let url = imageUploaded.url;
        products.url = id;
        products.image = url;
        fs.unlink(image[0], err => {
            if (err) console.log(err)
        });

        const newProduct = await product.create(products)

        res.status(201).send(newProduct);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    };
};