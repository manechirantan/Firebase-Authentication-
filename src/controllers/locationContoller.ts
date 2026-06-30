import { LocationCom } from "../services/locationServices.js";
import { Request, Response } from "express";

export class locationComDb {
  static async locationComDb(req: Request, res: Response) {
    try {
      console.log(req.user.companyId);
      let { location, def } = req.body;
      let companyid = Number(req.user.companyId);

      if (!companyid) {
        return res.json({ error: "company is not selected" });
      }

      console.log(req.body);
      const { locat, created } = await LocationCom.locationCom(
        location,
        def,
        companyid,
      );
      if (!created) {
        return res.json("comapny has alerdy on this loaction");
      }
      console.log(req.body);
      res.json(locat);
    } catch (error) {
      res.json("company is not selected");
    }
  }
}
