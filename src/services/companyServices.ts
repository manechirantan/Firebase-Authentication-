import Company from "../models/companyModel.js";

// to create company by the logged in user
export class CreateCompany {
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
