import { NUMBER } from "sequelize";
import LocationCom from "../services/addLocationToCompany.js";
import { Request, Response } from "express";

export default class locationComDb {
  static async locationComDb(req: Request, res: Response) {
    try {
      console.log(req.user.companyId);
      let { location, def } = req.body;
      let companyid =Number( req.user.companyId);
      console.log(req.body);
      let locationn = await LocationCom.locationCom(
        location,
        def,
        companyid,
      );
      console.log(req.body);
      res.json(locationn);
    } catch (error) {
      res.json(error);
    }
  }
}
