const sequelize = require("../config/connection");
const seedUser = require("./userData");
const seedProperty = require("./propertyData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  //await seedProperty();
  //seedProperty needs work. Would not seed :(

  process.exit(0);
};

seedAll();
