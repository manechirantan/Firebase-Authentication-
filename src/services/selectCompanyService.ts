import Company from "../models/companyModel.js";

export default class SeeCompany {
  static async seeCompany(companyId: number) {
    try {
      let company = await Company.findByPk(companyId);
      return company;
    } catch (error) {
      console.log(error);
    }
  }
}
