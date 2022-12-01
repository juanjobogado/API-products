import express from "express";
import productRoutes from './routes/products.routes.js'
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(productRoutes);
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

export default app;
