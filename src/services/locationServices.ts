import Location from "../models/locations.js";

export class LocationCom {
  static async locationCom(location: string, def: boolean, companyId: number) {
    try {
      let [locat, created] = await Location.findOrCreate({
        where: { companyId, location },
        defaults: {
          location,
          def,
          companyId,
        },
      });
      return { locat, created };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
