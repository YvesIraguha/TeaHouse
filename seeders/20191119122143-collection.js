const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Collections",
      [
        {
          id: "80d01f28-833c-432c-8ffb-c1acf9da437e",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Lorem ipsum dolor sit amet",
          previewPublicId: "q2vfycilkbcm68il25fj",
          collectionPublicId: "g04uocbpfpctngkp4slq",
          previewUrl:
            "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239109/q2vfycilkbcm68il25fj.png",
          collectionUrl:
            "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239103/g04uocbpfpctngkp4slq.pdf",
          type: "images",

          userId: process.env.ID
        },
        {
          id: "35f38664-9d42-40a5-97ba-29786b07ac69",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Hello world series",
          previewPublicId: "q2vfycilkbcm68il25fj",
          collectionPublicId: "g04uocbpfpctngkp4slq",
          previewUrl:
            "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239109/q2vfycilkbcm68il25fj.png",
          collectionUrl:
            "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239103/g04uocbpfpctngkp4slq.pdf",
          type: "images",

          userId: process.env.ID
        },
        {
          id: "998dff5c-9ade-473c-9497-33f2b300d89d",
          createdAt: new Date(),
          updatedAt: new Date(),
          title: "Hello world images collection",
          previewPublicId: "q2vfycilkbcm68il25fj",
          collectionPublicId: "g04uocbpfpctngkp4slq",
          previewUrl:
            "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239109/q2vfycilkbcm68il25fj.png",
          collectionUrl:
            "http://res.cloudinary.com/yvesiraguha/image/upload/v1574239103/g04uocbpfpctngkp4slq.pdf",
          type: "images",

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
    return queryInterface.bulkDelete("Collections", null, {});
  }
};
