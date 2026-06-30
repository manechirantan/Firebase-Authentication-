import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbs/sequelize.js";
import Company from "./companyModel.js";

export default class Location extends Model {
  declare id: number;
  declare location: string;
  declare default: boolean;
  declare companyId: number;
}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    default: {
      type: DataTypes.BOOLEAN,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
        key: "id",
      },
    },
  },
  { sequelize, modelName: "locations" },
);

Location.belongsTo(Company, {
  foreignKey: "companyId",
});

Company.hasMany(Location, {
  foreignKey: "companyId",
});

