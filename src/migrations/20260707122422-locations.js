"use strict";

const { table } = require("node:console");
const sequelize = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("locations", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      system: {
        type: Sequelize.BOOLEAN,
      },
      gstNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pincode: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      address2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        model: {
          tableName: "companies",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("locations");
  },
};
