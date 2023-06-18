const router = require("express").Router();
const { userInfo } = require("os");
const { Property, User, ListingPhotos } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

router.put("/upload", withAuth, async (req, res) => {
  const newListingInfo = {
    streetNumber: $("#street-number").value,
    streetName: $("#street-name").value,
    postalCode: $("#postal-code").value,
    city: $("#city").value,
    price: $("#price").value,
    bedrooms: $("#bedrooms").value,
    bathrooms: $("#bathrooms").value,
    listingType: $("#listing-type").value,
    // ownerID:, //SHOULD BE THE LOGGED IN USER - NOT SURE HOW TO SET
  };

  try {
    const newListing = Property.create(newListingInfo);

    res.json(newListing);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
