"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users', [
      {
        nome: 'Leonardo',
        email: 'leonardoBicho1@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Leonardo 2',
        email: 'leonardoBicho2@gmail.com',
        password_hash: await bcryptjs.hash('789010', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Leonardo 3',
        email: 'leonardoBicho3@gmail.com',
        password_hash: await bcryptjs.hash('2314241', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {},
  ),

  down: async () => {},
};
