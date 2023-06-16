const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ListingPhotos extends Model {}

ListingPhotos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    listingID: {
      type: DataTypes.INTEGER,
      references: {
        model: "property",
        key: "id",
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "listingPhotos",
  }
);

module.exports = ListingPhotos;
