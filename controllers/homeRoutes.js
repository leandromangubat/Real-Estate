const router = require("express").Router();
const { Property, User, ListingPhotos } = require("../models/");
const withAuth = require("../utils/auth");

// get all sales for homepage
router.get("/", async (req, res) => {
  try {
    // we need to get all Sales and include the User for each
    const saleData = await Property.findAll({
      include: [{ model: User, attributes: ["name"] }],
    });
    // serialize the data
    const sales = saleData.map((sales) => sales.get({ plain: true }));
    // we should render all the posts here
    res.render("homePage", { sales, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get single sale
router.get("/sale/:id", withAuth, async (req, res) => {
  try {
    //we need to get some data passed via the request body
    const saleData = await Property.findOne({
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Property,
          include: [User],
        },
      ],
    });

    if (saleData) {
      // serialize the data
      const sale = saleData.get({ plain: true });
      console.log(sale);
      res.render("single-sale", { sale, loggedI: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/about", (req, res) => {
  res.render("./partials/about", { loggedIn: req.session.loggedIn });
});

router.get("/forRent", (req, res) => {
  res.render("./partials/forRentListing");
});

router.get("/forSale", (req, res) => {
  res.render("./partials/forSaleListing");
});

router.get("/forSale/:id", async (req, res) => {
  try {
    const forSale = await Property.findByPk(req.params.id, {
      include: [
        User,
        {
          model: ListingPhotos,
          attributes: ["url"],
        },
      ],
    });
    if (!forSale) {
      return res
        .status(404)
        .json({ message: "No listing found with this id!" });
    }
    res.json(forSale);
    const forSaleListing = forSale.map((listing) =>
      listing.get({ plain: true })
    );
    res.render("./partials/forSaleListing", {
      forSaleListing,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error" });
  }
});

router.get("/newListing", (req, res) => {
  if (req.session.loggedIn) {
    res.render("./partials/newListing", { loggedIn: req.session.loggedIn });
    return;
  }
  res.redirect("/login");
});

router.get("/rentlisting", (req, res) => {
  if (req.session.loggedIn) {
    res.render("./partials/forRentMain", { loggedIn: req.session.loggedIn });
  } else {
    res.redirect("/login");
  }
});

router.get("/salelisting", (req, res) => {
  if (req.session.loggedIn) {
    res.render("./partials/forSaleMain", { loggedIn: req.session.loggedIn });
  } else {
    res.redirect("/login");
  }
});
module.exports = router;
