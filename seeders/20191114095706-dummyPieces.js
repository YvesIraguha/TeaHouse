const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Pieces",
      [
        {
          id: "80d01f28-833c-432c-8ffb-c1acf9da437e",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Lorem ipsum dolor sit amet",
          slug: "lorem-ipsum-dolor-sit-amet",
          type: "Short story",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "0d6d813b-7642-4fb5-bb67-dc7b1d1bf476",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Lorem ipsum dolor sit amet",
          slug: "lorem-ipsum-dolor-sit-amet",
          type: "Short story",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "68327ac8-c185-418b-99c1-da6929c2bf30",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Lorem ipsum dolor sit amet",
          slug: "lorem-ipsum-dolor-sit-amet",
          type: "Short story",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "35f38664-9d42-40a5-97ba-29786b07ac69",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "consectetur adipiscing elit",
          type: "Short story",
          slug: "consectetur-adipiscing-elit",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "998dff5c-9ade-473c-9497-33f2b300d89d",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "ut labore et dolore magna",
          slug: "ut-labore-et-dolore-magna",
          type: "Short story",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "8cee457e-d1bf-46ac-9aec-36f7ae4798ed",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Ut enim ad minim veniam",
          slug: "ut-enim-ad-minim-veniam",
          type: "Poem",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "b482d404-62f7-4669-a5de-0a61a821564f",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "dolor sit amet, consectetur",
          slug: "dolor-sit-amet-consectetur",
          type: "Poem",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "1b888aa5-49a0-489e-8a6e-d6ea776f6d68",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Lorem ipsum dolor sit amet",
          slug: "lorem-ipsum-dolor-sit-amet",
          type: "Short story",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "808b84e2-565b-41c7-a4ec-f87553276411",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "consectetur adipiscing elit",
          type: "Short story",
          slug: "consectetur-adipiscing-elit",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "0fa31173-71f0-4f9f-adf7-159fb583bbf5",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "ut labore et dolore magna",
          slug: "ut-labore-et-dolore-magna",
          type: "Short story",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "084aeb58-d777-458f-9e0a-3a6ca2e6fe03",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Ut enim ad minim veniam",
          slug: "ut-enim-ad-minim-veniam",
          type: "Poem",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        },
        {
          id: "a2cb4f9c-ab53-43e0-8347-e5c47cf6700b",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "dolor sit amet, consectetur",
          slug: "dolor-sit-amet-consectetur",
          type: "Poem",
          body:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          author: "Yves Iraguha",
          userId: process.env.ID
        }
      ],
      {}
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
*/
    return queryInterface.bulkDelete("Pieces", null, {});
  }
};
