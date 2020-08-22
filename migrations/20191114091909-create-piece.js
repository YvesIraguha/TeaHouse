module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Pieces", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM(
          "Short story",
          "Poem",
          "Lit news",
          "Gossip",
          "Interview"
        )
      },
      body: {
        type: Sequelize.TEXT
      },
      author: {
        type: Sequelize.STRING
      },
      userId: Sequelize.UUID,
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
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Pieces");
  }
};
