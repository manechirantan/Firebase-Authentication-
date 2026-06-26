import { Model, DataTypes } from "sequelize";
import { sequelize } from "../dbs/sequelize.js";

export default class User extends Model {
  declare uid: string;
  declare email: string;
  declare name: string;
}

User.init(
  {
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Nusers",
  },
);
