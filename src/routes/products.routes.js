import { Router } from "express";
import { createProduct } from "../controllers/createProduct.controller.js";
import { getAllProducts } from "../controllers/getAllProducts.controller.js";
import { patchProducts } from "../controllers/patchProducts.controller.js";
import { getCategories } from "../controllers/getCategories.js"


const router = Router();

router.get("/products", getAllProducts);
router.post("/products", createProduct);
router.patch("/products/:id", patchProducts);
router.get("/categories", getCategories);


export default router;