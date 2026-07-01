import express from "express";
import verify from "../middleware/middleware.js";
import ProductController from "../controllers/productController.js";
let productRouter = express.Router();

productRouter.use(verify);

productRouter.post("/users/product/create", ProductController.createProductDb);

productRouter.get("/users/product/see", ProductController.seeProductDb);

export default productRouter;
