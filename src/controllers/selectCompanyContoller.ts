import { Request, Response } from "express";

export default class SeeCompanyDb {
  static async seeCompanyDb(req: Request, res: Response) {
    try {
      let company = {
        name: req.company.name,
        address: req.company.address,
        owerid: req.user.uid,
        namee: req.user.companyId,
      };
      res.send(company);
    } catch (error) {
      return res.send(error);
    }
  }
}
