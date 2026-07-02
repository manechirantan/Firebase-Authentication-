import ProductService from "../services/productService.js";
import { Request, Response } from "express";

export default class ProductController {
  // to create the product on the selected location

  static async createProductDb(req: Request, res: Response) {
    try {
      let locationId = Number(req.user.locationId);
      if (!locationId) {
        return res.json({ message: "please selcet the comapny and location " });
      }
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

  // to see all the products added on the selected location id

  static async seeProductDb(req: Request, res: Response) {
    try {
      let locationId = Number(req.user.locationId);
      if (!locationId) {
        return res.json({ message: "please selcet the comapny and location " });
      }
      let product = await ProductService.seeProduct(locationId);

      res.json(product);
    } catch (error) {
      return res.json({
        message:
          "this comapany location does, not have any products yet so add the products to see it",
      });
    }
  }
}
