import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbs/sequelize.js";
import Company from "./companyModel.js";

export default class Location extends Model {
  declare id: number;
  declare location: string;
  declare system: boolean;
  declare gstNumber?: string;
  declare pincode?: number;
  declare address2: string;
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
    system: {
      type: DataTypes.BOOLEAN,
    },
    gstNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Company,
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
  { sequelize,modelName:"location", tableName: "location" },
);

Location.belongsTo(Company, {
  foreignKey: "companyId",
});

Company.hasMany(Location, {
  foreignKey: "companyId",
});
