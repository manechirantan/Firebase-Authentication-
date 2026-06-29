import Company from "../models/companyModel.js";

export default class UpdateCompany {
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
