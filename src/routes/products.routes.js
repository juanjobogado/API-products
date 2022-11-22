import { Router } from "express";
import { postProducts } from "../controllers/postProducts.controller.js";
import { patchProducts } from "../controllers/patchProducts.controller.js";

const router = Router();

router.post("/products", postProducts);
router.patch("/products", patchProducts);


export default router;