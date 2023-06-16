const router = require("express").Router();
const { Property, User, ListingPhotos } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

router.get("/", async (req, res) => {
  // find all properties for sale
  try {
    const forSale = await Property.findAll({
      where: {
        listingType: "for sale",
      },
      include: [
        {
          model: ListingPhotos,
          attributes: ["url"],
        },
      ],
    });
    res.json(forSale);
    const forSaleListings = forSale.map((listing) =>
      listing.get({ plain: true })
    );
    res.render("forSaleListing", {
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
    const forSale = await Property.findByPk({
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

router.post("/", withAuth, async (req, res) => {
  try {
    const newSale = await Property.create({
      ...req.body,
      ownerID: req.session.ownerID,
    });

    res.status(200).json(newSale);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const saleData = await Property.destroy({
      where: {
        id: req.params.id,
        ownerID: req.session.ownerID,
      },
    });
    if (!saleData) {
      res.status(404).json({ message: "No listing found with this id!" });
    }
    res.status(200).json(saleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
