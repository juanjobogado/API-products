import { Router } from "express";
import { postProducts } from "../controllers/postProducts.controller.js";

const router = Router();

router.post("/products", postProducts);


export default router;