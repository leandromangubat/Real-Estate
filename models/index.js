const User = require("./User");
const Property = require("./Property");
const ListingPhotos = require("./ListingPhotos");

User.hasMany(Property, {
  foreignKey: "ownerID",
  onDelete: "CASCADE",
});

Property.belongsTo(User, {
  foreignKey: "ownerID",
});

Property.hasMany(ListingPhotos, {
  foreignKey: "listingID",
  onDelete: "CASCADE",
});

ListingPhotos.belongsTo(Property, {
  foreignKey: "listingID",
});

module.exports = { User, Property };
