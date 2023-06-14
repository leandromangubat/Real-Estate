const { Property } = require('../models');

const propertydata =
[
  {
    "propertyTitle": "ParkDale",
    "propertyPrice": "$850,000",
    "ownerId": 1
  },
  {
    "propertyTitle": "RoseBank",
    "propertyPrice": "$900,000",
    "ownerId": 2
  },
  {
    "propertyTitle": "CliffCrest",
    "propertyPrice": "$1,420,000",
    "ownerId": 3
  }
];

const seedPost = () => Property.bulkCreate(propertydata);

module.exports = seedPost;