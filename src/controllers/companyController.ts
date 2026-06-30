import { CreateCompany } from "../services/companyServices.js";
import { UpdateCompany } from "../services/companyServices.js";
import { Request, Response } from "express";
import User from "../models/newUser.js";

// to create the company by the logged in user
export class CreateCompanyDb {
  static async createCompanyDb(req: Request, res: Response) {
    try {
      let uid = req.user.uid;
      console.log(uid);
      let user = await User.findOne({
        where: {
          uid,
        },
      });
      if (!user) {
        return res.json({
          message: "User not found",
        });
      }
      console.log(user);
      let Ownerid = user.id;
      const {
        name,
        dateOfIncorporation,
        address,
        state,
        gstNumber,
        description,
        pincode,
        location,
        address2,
      } = req.body;

      console.log(user, "What is the user here");
      let { company, locat, comCreated, locationCreate } =
        await CreateCompany.createCompany(
          name,
          dateOfIncorporation,
          address,
          state,
          gstNumber,
          description,
          pincode,
          Ownerid,
          location,
          address2,
        );
      console.log(comCreated, locationCreate);
      if (!comCreated || !locationCreate) {
        return res.json({
          message: "Company or location already exists",
        });
      }
      res.send({ locat, company });
    } catch (error) {
      return res.send(error);
    }
  }
}

// to select the company by the logged in users

export class SeeCompanyDb {
  static async seeCompanyDb(req: Request, res: Response) {
    try {
      let token = req.token;
      let company = {
        name: req.company.name,
        address: req.company.address,
        owerid: req.user.uid,
        namee: req.user.companyId,
      };
      res.send({ company, token });
    } catch (error) {
      return res.send(error);
    }
  }
}

// to update the company details

export class UpdateCompanyDb {
  static async updateCompanyDb(req: Request, res: Response) {
    try {
      let { name, address } = req.body;
      let Ownerid = req.user.id;
      let id = req.user.companyId;

      let company = await UpdateCompany.updateCompany(
        name,
        address,
        Number(Ownerid),
        Number(id),
      );
      if (!company) {
        return res.json({
          message: "pls refresh the token after changing the company",
        });
      }
      res.json(company);
    } catch (error) {
      return res.json(error);
    }
  }
}
