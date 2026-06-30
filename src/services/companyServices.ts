import companyMid from "../middleware/companyMiddleware.js";
import Company from "../models/companyModel.js";
import Location from "../models/locations.js";

// to create company by the logged in user
export class CreateCompany {
  static async createCompany(
    name: string,
    dateOfIncorporation: string,
    address: string,
    state: string,
    gstNumber?: string,
    description?: string,
    pincode?: number,
    Ownerid?: number,
    location?: string,
    address2?: string,
  ) {
    try {
      let [company, comCreated] = await Company.findOrCreate({
        where: {
          name,
          Ownerid,
        },
        defaults: {
          name,
          dateOfIncorporation,
          address,
          state,
          gstNumber,
          description,
          pincode,
          Ownerid,
        },
      });
      //database company is created
      //compay.id
      //create location, state, address,gstnumber,pincode, companyId
      let companyId = company.id;
      let system = true;
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
      console.log(company);
      return { company, locat, comCreated, locationCreate };
    } catch (error) {
      throw error;
    }
  }
}

// to update company by the logged in user

export class UpdateCompany {
  static async updateCompany(
    name: string,
    address: string,
    Ownerid: number,
    id: number,
  ) {
    try {
      let company = await Company.update(
        { name, address },
        { where: { Ownerid, id } },
      );
      return company;
    } catch (error) {
      console.log(error);
    }
  }
}
