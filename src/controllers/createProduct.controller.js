import { product } from "../models/products.js"
import { uploadImage } from "../cloudinary/cloudinary.js";
import fs from "fs";

export const createProduct = async (req, res) => {
    try {
        const { title, price, stock, categories, description, image } = req.body;

        if (!title || !price || !stock || !categories || !description)
            throw new Error("bad request");

        let products = { title, price, stock, categories, description };

        if (image) {
            const imageUploaded = await uploadImage(image[0]);
            let id = imageUploaded.public_id;
            let url = imageUploaded.url;
            products.url = id;
            products.image = url;
            fs.unlink(image[0], err => {
                if (err) console.log(err);
            });
        } else {
            switch (categories) {
                case "Mouse":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010253/folder/mouseDefault_ec4ma4.jpg";
                    break;
                case "Keyboard":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010269/folder/tecladoDefault_y5drsq.jpg";
                    break;
                case "Desktop":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010233/folder/escritorioDefault_mlftah.jpg";
                    break;
                case "Laptop":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010251/folder/laptopDefault_galxis.jpg";
                    break;
                case "Headphone":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010263/folder/audifonosDefault_b1laff.jpg";
                    break;
                case "Camera":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010342/folder/camaraDefault_visbvo.jpg";
                    break;
                case "Chair":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010222/folder/sillaDefault_dgz0ev.jpg";
                    break;
                case "Display":
                    products.image = "https://res.cloudinary.com/davixx5su/image/upload/v1670010205/folder/monitorDefault_vza5nw.jpg";
                    break;
                default:
                    break;
            };
        };

        const newProduct = await product.create(products)
        res.status(201).send(newProduct);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    };
};
