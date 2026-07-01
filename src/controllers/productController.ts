import ProductService from "../services/productService.js";
import { Request, Response } from "express";

export default class ProductController {
  static async createProductDb(req: Request, res: Response) {
    try {
      let locationId = Number(req.user.locationId);
      let { productName, price } = req.body;
      let { product, createdProduct } = await ProductService.createProduct(
        productName,
        locationId,
        price,
      );
      if (!createdProduct) {
        return res.json({
          message: "This product At this Location Is already Created",
        });
      }
      res.json(product);
    } catch (error) {
      res.json(error);
    }
  }
}
