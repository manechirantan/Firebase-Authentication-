import { Request, Response } from "express";

export default class SeeCompanyDb {
  static async seeCompanyDb(req: Request, res: Response) {
    try {
      let token = req.token;
      let company = {
        name: req.company.name,
        address: req.company.address,
        owerid: req.user.uid,
        namee: req.user.companyId,
      };
      res.send({ company, token });
    } catch (error) {
      return res.send(error);
    }
  }
}
