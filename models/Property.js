const { Model, DataTypes } = require("sequelize");
const {
  databaseVersion,
} = require("../../../UTOR-VIRT-FSF-PT-02-2023-U-LOLC/14-MVC/01-Activities/16-Stu_Sessions/Solved/config/connection");
const sequelize = require("../config/connection");

class Property extends Model {}

Property.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    streetNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    streetName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unitNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bathrooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    listingType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "gallery",
  }
);

module.exports = Property;
