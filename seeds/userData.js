const { User } = require("../models");

const userdata = [
  {
    name: "Mohamad",
    email: "mohamad@email.com",
    password: "password",
  },
  {
    name: "Jason",
    email: "jason@email.com",
    password: "password",
  },
  {
    name: "Jack",
    email: "jack@email.com",
    password: "password",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
