/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Collections", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },

      title: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM("Book series", "Images")
      },

      author: {
        type: Sequelize.STRING
      },
      userId: Sequelize.UUID,
      previewPublicId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      previewUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      collectionPublicId: {
        allowNull: false,
        type: Sequelize.STRING
      },
      collectionUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Collections");
  }
};
