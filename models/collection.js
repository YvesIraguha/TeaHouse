/* eslint-disable func-names */
module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define(
    "Collection",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      previewPublicId: {
        allowNull: false,
        type: DataTypes.STRING
      },
      previewUrl: {
        allowNull: false,
        type: DataTypes.STRING
      },
      collectionPublicId: {
        allowNull: false,
        type: DataTypes.STRING
      },
      collectionUrl: {
        allowNull: false,
        type: DataTypes.STRING
      },
      title: DataTypes.STRING,
      type: DataTypes.ENUM("Book series", "images"),
      author: DataTypes.STRING,
      userId: DataTypes.UUID
    },
    {}
  );
  // eslint-disable-next-line no-unused-vars
  Collection.associate = function(models) {
    // associations can be defined here
  };
  return Collection;
};
