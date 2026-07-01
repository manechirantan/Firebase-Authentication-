import Location from "../models/locations.js";

export class LocationCom {
  static async locationCom(
    location: string,
    companyId: number,
    gstNumber: number,
    pincode: number,
    address2: string,
  ) {
    try {
      let system = false;
      let [locat, locationCreate] = await Location.findOrCreate({
        where: {
          location,
          companyId,
        },
        defaults: {
          location,
          system,
          gstNumber,
          pincode,
          address2,
          companyId,
        },
      });
      return { locat, locationCreate };
    } catch (error) {
      throw error;
    }
  }
}

export class LocationSelect {
  static async locationSelect(id: number, companyId: number) {
    try {
      let locat = await Location.findOne({
        where: { id, companyId },
      });
      return locat;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
