import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbs/sequelize.js";
import Location from "./locations.js";

export default class Product extends Model {
  declare id: number;
  declare productName: string;
  declare locationId: number;
  declare price: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      references: {
        model: Location,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "products",
  },
);

Location.hasMany(Product, {
  foreignKey: "locationId",
});

Product.belongsTo(Location, {
  foreignKey: "locationId",
});
