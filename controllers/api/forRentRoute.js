const router = require("express").Router();
const { Property, User } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

router.get("/", async (req, res) => {
  // find all properties for rent
  try {
    const forRent = await Property.findAll({
      where: {
        listingType: "for rent",
      },
    });
    res.json(forRent);
    const forRentListings = forRent.map((listing) =>
      listing.get({ plain: true })
    );
    res.render("rentListing", {
      forRentListings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  // find for sale posting by id
  try {
    const forRent = await ForRent.findByPk({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Property,
          include: [User],
        },
      ],
    });
    res.json(forRent);
    const forRentListing = forRent.map((listing) =>
      listing.get({ plain: true })
    );
    res.render("forRentListing", {
      forRentListing,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
