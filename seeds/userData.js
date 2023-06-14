const { User } = require('../models');

const userdata =
[
  {
    "username": "Mohamad",
    "password": "password"
  },
  {
    "username": "Jason",
    "password": "password"
  },
  {
    "username": "Jack",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

