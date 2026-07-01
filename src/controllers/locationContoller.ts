import { LocationCom } from "../services/locationServices.js";
import { Request, Response } from "express";

export class locationComDb {
  static async locationComDb(req: Request, res: Response) {
    try {
      let companyId = Number(req.user.companyId);
      let { location, gstNumber, pincode, address2 } = req.body;

      let { locat, locationCreate } = await LocationCom.locationCom(
        location,
        companyId,
        gstNumber,
        pincode,
        address2,
      );
      if (locationCreate) {
        return res.json({
          message: "the comapny at this location has been already created",
        });
      }
      res.json(locat);
    } catch (error) {
      return res.json(error);
    }
  }
}
