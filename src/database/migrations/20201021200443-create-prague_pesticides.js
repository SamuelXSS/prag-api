'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('prague_pesticides', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      prague_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pragues', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      pesticide_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'pesticides', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('prague_pesticides');
  }
};
