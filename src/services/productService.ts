import Product from "../models/products.js";
import { Op } from "sequelize";
export default class ProductService {
  // to add the new product on selected location id
  static async createProduct(
    productName: string,
    locationId: number,
    price: number,
  ) {
    try {
      let [product, createdProduct] = await Product.findOrCreate({
        where: {
          productName,
          locationId,
        },
        defaults: {
          productName,
          locationId,
          price,
        },
      });
      return { product, createdProduct };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // to see the products from the selcted location

  static async seeProduct(
    locationId: number,
    limit: number,
    page: number,
    offset: number,
    search: string = "",
    sortby: string,
    order: string,
  ) {
    try {
      let product = await Product.findAndCountAll({
        where: {
          locationId,
          ...(search && { productName: { [Op.iLike]: `%${search}%` } }),
        },
        order: [[sortby, order]],
        limit,
        offset,
      });
      return product;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
