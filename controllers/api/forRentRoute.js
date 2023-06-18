const router = require("express").Router();
const { Property, User, ListingPhotos } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

router.get("/", async (req, res) => {
  // find all properties for rent
  try {
    const forRent = await Property.findAll({
      where: {
        listingType: "For Rent",
      },
      include: [
        {
          model: ListingPhotos,
          attributes: ["url"],
        },
      ],
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
    const forRent = await Property.findByPk({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Property,
          include: [User],
        },
        {
          model: ListingPhotos,
          attributes: ["url"],
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

router.post("/", withAuth, async (req, res) => {
  try {
    const newRental = await Property.create({
      ...req.body,
      ownerID: req.session.ownerID,
    });

    res.status(200).json(newRental);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const rentData = await Property.destroy({
      where: {
        id: req.params.id,
        ownerID: req.session.ownerID,
      },
    });
    if (!rentData) {
      res.status(404).json({ message: "No listing found with this id!" });
    }
    res.status(200).json(rentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
