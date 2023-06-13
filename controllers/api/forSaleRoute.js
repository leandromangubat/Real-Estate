const router = require("express").Router;
const { Property, User } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

router.get("/", async (req, res) => {
  // find all properties for sale
  try {
    const forSale = await Property.findAll({
      where: {
        listingType: "for sale",
      },
    });
    res.json(forSale);
    const forSaleListings = forSale.map((listing) =>
      listing.get({ plain: true })
    );
    res.render("saleListing", {
      forSaleListings,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  // find for sale posting by id
  try {
    const forSale = await ForSale.findByPk({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Property,
          include: [User],
        },
      ],
    });
    res.json(forSale);
    const forSaleListing = forSale.map((listing) =>
      listing.get({ plain: true })
    );
    res.render("forSaleListing", {
      forSaleListing,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
