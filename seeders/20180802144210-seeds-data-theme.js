'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Themes', [{
    activityName: 'Arabiki Crank',
    step: 2,
    createdAt : new Date(),
    updatedAt: new Date(),
    GroupId: 1,
  }, {
    activityName: 'Touch Sensor Fault',
    step: 4,
    createdAt : new Date(),
    updatedAt: new Date(),
    GroupId: 2,
  }, {
    activityName: 'Hanabira Cam',
    step: 5,
    createdAt : new Date(),
    updatedAt: new Date(),
    GroupId: 3,
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
