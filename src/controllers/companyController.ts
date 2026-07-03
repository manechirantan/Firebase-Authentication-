import User from "../models/newUser.js";
import CompanyService from "../services/companyServices.js";
import { Request, Response } from "express";

export default class CompanyController {
  // to create the company by the logged in user
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
        await CompanyService.createCompany(
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

  // to select the company by the logged in users
  static async seeCompanyDb(req: Request, res: Response) {
    try {
      let token = req.token;
      let locations = req.location;
      let company = {
        name: req.company.name,
        address: req.company.address,
        owerid: req.user.uid,
        comapnyid: req.user.companyId,
      };
      res.send({ company, locations, token });
    } catch (error) {
      return res.send(error);
    }
  }
  // to update the company details
  static async updateCompanyDb(req: Request, res: Response) {
    try {
      let { name, address } = req.body;
      let Ownerid = req.user.id;
      let id = req.user.companyId;

      let company = await CompanyService.updateCompany(
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

  // to see all coampnies of the user

  static async seeAllCompanyDb(req: Request, res: Response) {
    try {
      console.log(req.user.uid);
      let uid = req.user.uid;
      console.log(typeof uid);
      let company = await CompanyService.seeCompany(uid);
      res.json(company);
    } catch (error) {
      res.json(error);
    }
  }
}
