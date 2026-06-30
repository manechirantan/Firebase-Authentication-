import { clear } from "node:console";
import Location from "../models/locations.js";

export default class LocationCom {
  static async locationCom(location: string, def: boolean, companyId: number) {
    try {
      let locat = await Location.create({ location, def, companyId });
      await locat.save();
      return locat;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
