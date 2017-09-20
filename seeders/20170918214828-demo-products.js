'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

  return queryInterface.bulkInsert('products', [{
      name: 'Hook & Ladder',
      price: 5.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Smokehouse beef & cheddar brisket',
      price: 6.99,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Firehouse Meatball',
      price: 5.20,
      createdAt: new Date(),
      updatedAt: new Date()
    }  
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.dropTable('products');
  }
};
