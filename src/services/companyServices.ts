import Company from "../models/companyModel.js";
import Location from "../models/locations.js";
import User from "../models/newUser.js";
import { sequelize } from "../dbs/sequelize.js";
import { Transaction, Op } from "sequelize";

// to create company by the logged in user
export default class CompanyService {
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
      return await sequelize.transaction(async (transaction: Transaction) => {
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
          transaction,
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
          lock: true,
          transaction,
        });
        console.log(company);
        return { company, locat, comCreated, locationCreate };
      });
    } catch (error) {
      throw error;
    }
  }

  // to update company by the logged in user

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

  // to see all coampnies of the user

  static async seeCompany(uid: string, search: string = "") {
    try {
      console.log("runnig");
      console.log(uid);
      let user = await User.findOne({ where: { uid } });
      console.log(user);

      let userID = user?.id;
      console.log(userID);

      let company = await Company.findAll({ where: { Ownerid: userID } });
      let newCompany = await Company.findAndCountAll({
        where: {
          Ownerid: userID,
          ...(search && { name: { [Op.iLike]: `%${search}%` } }),
        },
      });
      return company;
    } catch (error) {
      throw error;
    }
  }
}
