const router = require("express").Router();
const { Property, User } = require("../models/");
const withAuth = require("../utils/auth");

// get all sales for homepage
router.get("/", async (req, res) => {
  try {
    // we need to get all Sales and include the User for each
    const saleData = await Property.findAll({
      include: [User],
    });
    // serialize the data
    const sales = saleData.map((sales) => sales.get({ plain: true }));
    // we should render all the posts here
    res.render("homePage", { sales, logged_in: req.session.logged_in });
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
      res.render("single-sale", { sale, loggedIn: req.session.loggedIn });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

router.get('/about',(req,res)=>{
  res.render('./partials/about');
})


module.exports = router;
