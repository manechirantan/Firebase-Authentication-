"use strict";

const sequelize = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("companies", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      dateOfIncorporation: {
        type: Sequelize.DATEONLY,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gstnumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      Ownerid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        model: {
          tableName: "Nusers",
          schema: "schema",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("companies");
  },
};
