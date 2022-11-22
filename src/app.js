import express from "express";
import productRoutes from './routes/products.routes.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productRoutes);

export default app;
