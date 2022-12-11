import { product } from "../models/products.js";
import fs from "fs";
import { uploadImage } from "../cloudinary/cloudinary.js";

export const patchProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, stock, categories, description, enabled, image } = req.body;
    const findProduct = await product.findByPk(id);
    if (!findProduct) return res.status(404).json({ msg: "Product not found" });

    const fields = {};
    if (title) fields.title = title;
    if (price) fields.price = price;
    if (typeof stock === "number") fields.stock = stock;
    if (categories) fields.categories = categories;
    if (description) fields.description = description;
    if (typeof enabled === "boolean") fields.enabled = enabled;

    if (image) {
      const imageUploaded = await uploadImage(image[0]);
      let id = imageUploaded.public_id;
      let url = imageUploaded.url;
      fields.url = id;
      fields.image = url;
      fs.unlink(image[0], (err) => {
        if (err) console.log(err);
      });
    }

    if (Object.entries(fields).length === 0) throw new Error("Not enough info");

    await findProduct.update(fields);
    res.status(200).json({
      msg: "Changes Saved",
      product: findProduct,
    });
  } catch (error) {
    res.status(500).send({ msg: "Server error", error: error.message });
  }
};
