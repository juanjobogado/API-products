import { Router } from "express";
import { createProduct } from "../controllers/createProduct.controller.js";
import { getCategories } from "../controllers/getCategories.js"

const router = Router();

router.post("/products", createProduct);
router.get("/categories", getCategories)


export default router;