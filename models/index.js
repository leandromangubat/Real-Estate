const User = require('./User');
const Property = require('./Property');

User.hasMany(Property, {
  foreignKey: 'ownerID',
  onDelete: 'CASCADE'
});

Property.belongsTo(User, {
  foreignKey: 'ownerID'
});

module.exports = { User, Property };