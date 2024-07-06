'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }).catch(err => console.log('Column already exists: createdAt in Products'));

    await queryInterface.addColumn('Products', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }).catch(err => console.log('Column already exists: updatedAt in Products'));

    await queryInterface.addColumn('Categories', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }).catch(err => console.log('Column already exists: createdAt in Categories'));

    await queryInterface.addColumn('Categories', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }).catch(err => console.log('Column already exists: updatedAt in Categories'));
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'createdAt').catch(err => console.log('Column does not exist: createdAt in Products'));
    await queryInterface.removeColumn('Products', 'updatedAt').catch(err => console.log('Column does not exist: updatedAt in Products'));
    await queryInterface.removeColumn('Categories', 'createdAt').catch(err => console.log('Column does not exist: createdAt in Categories'));
    await queryInterface.removeColumn('Categories', 'updatedAt').catch(err => console.log('Column does not exist: updatedAt in Categories'));
  }
};

