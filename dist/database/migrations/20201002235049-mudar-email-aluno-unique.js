"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos',
    'email',
    {
      type: Sequelize.STRING,
      allowNul: false,
      unique: true,
    },
  ),

  down: async () => {},
};
