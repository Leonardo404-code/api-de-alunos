const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users', [
      
    ], {},
  ),

  down: async () => {},
};
