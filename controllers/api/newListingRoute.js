const router = require("express").Router();
const { userInfo } = require("os");
const { Property, ListingPhotos } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

router.get("/", (req, res) => {
  Property.findAll()
    .then((dbPropertyData) => res.json(dbPropertyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", async (req, res) => {
  try {
    const newListing = Property.create(req.body);

    res.status(200).json(newListing);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
