import UpdateCompany from "../services/updateCompanyService.js";
import { Request, Response } from "express";

export default class UpdateCompanyDb {
  static async updateCompanyDb(req: Request, res: Response) {
    try {
      let { name, address } = req.body;
      let Ownerid = req.user.id;
      let id = req.user.companyId;

      let company = await UpdateCompany.updateCompany(
        name,
        address,
        Number(Ownerid),
        Number(id),
      );
      if (!company) {
        return res.json({
          message: "pls refresh the token after changing the company",
        });
      }
      res.json(company);
    } catch (error) {
      return res.json(error);
    }
  }
}
