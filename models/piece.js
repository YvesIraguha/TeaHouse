module.exports = (sequelize, DataTypes) => {
  const Piece = sequelize.define(
    "Piece",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      slug: {
        allowNull: false,
        type: DataTypes.STRING
      },
      title: DataTypes.STRING,
      type: DataTypes.ENUM(
        "Short story",
        "Poem",
        "Lit news",
        "Gossip",
        "Interview",
        "Essay"
      ),
      body: DataTypes.TEXT,
      author: DataTypes.STRING,
      userId: DataTypes.UUID
    },
    {}
  );
  Piece.associate = (models) => {
    Piece.belongsTo(models.User, { foreignKey: "userId", onDelete: "CASCADE" });
  };
  return Piece;
};
