import { Request, Response } from "express";
import SeeCompany from "../services/selectCompanyService.js";

export default class SeeCompanyDb {
  static async seeCompanyDb(req: Request, res: Response) {
    try {
      let companyId = req.user.companyId;

      let company = await SeeCompany.seeCompany(Number(companyId));

      res.send(company);
    } catch (error) {
      return res.send(error);
    }
  }
}
