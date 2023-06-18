const router = require("express").Router();

const forSaleRoutes = require("./forSaleRoute");
const forRentRoutes = require("./forRentRoute");
const userRoutes = require("./userRoutes");
const newListingRoutes = require("./newListingRoute");

router.use("/forsale", forSaleRoutes);
router.use("/forrent", forRentRoutes);
router.use("/users", userRoutes);
router.use("/newListing", newListingRoutes);

module.exports = router;
