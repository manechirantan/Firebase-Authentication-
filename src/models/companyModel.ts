import { Model, DataTypes } from "sequelize";
import { sequelize } from "../dbs/sequelize.js";

import User from "./newUser.js";

export default class Company extends Model {
  declare id: number;
  declare name: string;
  declare address: string;
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Ownerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  { sequelize, modelName: "company", paranoid: true },
);

User.hasMany(Company, {
  foreignKey: "Ownerid",
});

Company.belongsTo(User, {
  foreignKey: "Ownerid",
});
