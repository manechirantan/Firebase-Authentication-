import { Model, DataTypes } from "sequelize";
import { sequelize } from "../dbs/sequelize.js";

export default class User extends Model {
  declare id: number;
  declare uid: string;
  declare email: string;
  declare name: string;
  declare address: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Nusers",
  },
);
