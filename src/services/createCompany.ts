import Company from "../models/companyModel.js";

export default class CreateCompany {
  static async createCompany(name: string, address: string, Ownerid: number) {
    try {
      let company = await Company.create({ name, address, Ownerid });
      await company.save();
      return company;
    } catch (error) {
      console.log(error);
    }
  }
}
