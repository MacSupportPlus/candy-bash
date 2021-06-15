'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('singlePlayerGames', 
    [
      {
        title : 'Snake',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title : 'Space Chasers',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Color Crusher',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
