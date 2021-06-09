'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('users', [
        {
          username: 'jacob',
          password: '1234',
          points: 400,
          regionID: 1,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          username: 'jason',
          password: '5678',
          points: 400,
          regionID: 2,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          username: 'mac',
          password: '1111',
          points: 400,
          regionID: 3,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          username: 'andrena',
          password: '2222',
          points: 400,
          regionID: 4,
          createdAt: new Date(),
          updatedAt: new Date() 
        },
        {
          username: 'veronica',
          password: '3333',
          points: 100,
          regionID: 5,
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
