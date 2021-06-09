'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('regions', [
      {
        name : 'southeast',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name : 'southwest',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name : 'midwest',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name : 'west',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
      {
        name : 'northeast',
        createdAt: new Date(),
        updatedAt: new Date() 
      }], {});
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
