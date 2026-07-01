import { LocationCom } from "../services/locationServices.js";
import { LocationSelect } from "../services/locationServices.js";
import { Request, Response } from "express";

export class locationComDb {
  // to create new location for the selcted company
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
      if (!locationCreate) {
        return res.json({
          message: "the comapny at this location has been already created",
        });
      }
      res.json(locat);
    } catch (error) {
      return res.json({
        message: error,
      });
    }
  }
}

// to show and select the location is selected

export class LocationSelectDb {
  static async locationSelectDb(req: Request, res: Response) {
    try {
      console.log("hello from location controller");
      let token = req.token;
      let id = Number(req.params.id);
      console.log(id);
      let companyId = Number(req.user.companyId);
      let location = await LocationSelect.locationSelect(id, companyId);
      console.log(location);
      console.log(token);
      res.send({ location, token });
    } catch (error) {
      res.send(error);
    }
  }
}
