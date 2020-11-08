'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('areas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      farm_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'farms', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      area_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ha: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      latitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      longitude: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      planting_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      harvest_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('areas');
  }
};
