/* eslint-disable no-unused-vars */

const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
  */

    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: process.env.ID,
          createdAt: new Date(),
          updatedAt: new Date(),
          firstName: process.env.FIRST_NAME,
          lastName: process.env.LAST_NAME,
          email: process.env.EMAIL,
          password: process.env.USER_PASSWORD,
          role: "Admin"
        },
        {
          id: "5c66acae-6e32-43e4-8944-3e7f1f487e61",
          createdAt: new Date(),
          updatedAt: new Date(),
          firstName: process.env.FIRST_NAME,
          lastName: process.env.LAST_NAME,
          email: "yraguha@gmail.com",
          password: process.env.USER_PASSWORD,
          role: "User"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
  */

    return queryInterface.bulkDelete("Users", null, {});
  }
};
