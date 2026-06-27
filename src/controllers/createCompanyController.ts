import CreateCompany from "../services/createCompany.js";
import { Request, Response } from "express";

export default class CreateCompanyDb {
  static async createCompanyDb(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let { name, address } = req.body;
      let company = await CreateCompany.createCompany(
        name,
        address,
        Number(id),
      );
      res.send(company);
    } catch (error) {
      return res.send(error);
    }
  }
}
