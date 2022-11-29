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
        // const {image} = req.files
        const { title, price, stock, categories, description} = req.body;
        if (!title || !price || !stock || !categories || !description) throw new Error("bad request");
        console.log(req.files);
        console.log(req.body, "aqui");
         let products = {title, price, stock, categories, description};
         if (req.files) {
            console.log("entra")
            const imageUploaded = await uploadImage(req.files.image.tempFilePath);
            let id = imageUploaded.public_id;
            let url = imageUploaded.url;
            products.url = id;
            products.image = url;
            await fs.unlink(req.files.image.tempFilePath, err =>{
                if(err) console.log(err)
              });
          }

        const newProduct = await product.create(products)

         res.status(201).send("done");
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    };
};