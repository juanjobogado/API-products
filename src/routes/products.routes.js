import { Router } from "express";
import { createProduct } from "../controllers/createProduct.controller.js";

const router = Router();

router.post("/products", createProduct);


export default router;