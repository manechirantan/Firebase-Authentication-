import { Model, DataTypes } from "sequelize";
import { sequelize } from "../dbs/sequelize.js";

import User from "./newUser.js";

export default class Company extends Model {
  declare id: number;
  declare name: string;
  declare dateOfIncorporation: string;
  declare address: string;
  declare state: string;
  declare gstNumber?: string;
  declare description?: string;
  declare pincode?: number;
  declare Ownerid: number;
}

Company.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    dateOfIncorporation: {
      type: DataTypes.DATEONLY,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    gstnumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Ownerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize, modelName: "company", tableName: "company" },
);

User.hasMany(Company, {
  foreignKey: "Ownerid",
});

Company.belongsTo(User, {
  foreignKey: "Ownerid",
});
