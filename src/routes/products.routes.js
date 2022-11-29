import { Router } from "express";
import { createProduct } from "../controllers/createProduct.controller.js";
import { getAllProducts } from "../controllers/getAllProducts.controller.js";
import { patchProducts } from "../controllers/patchProducts.controller.js";
import { getCategories } from "../controllers/getCategories.controller.js"
import { idProduct } from "../controllers/idProduct.controller.js";
import fileUpload from "express-fileupload"

const router = Router();

router.get("/products", getAllProducts);
router.post("/products",fileUpload({
    useTempFiles:true,
    tempFileDir:"./uploads"
  }), createProduct);
router.patch("/products/:id", patchProducts);
router.get("/categories", getCategories);
router.get("/products/:id", idProduct);
export default router;