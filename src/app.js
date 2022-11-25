import express from "express";
import productRoutes from './routes/products.routes.js'
import morgan from "morgan";
import cors from "cors";


const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(productRoutes);

export default app;
