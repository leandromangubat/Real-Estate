const router = require("express").Router();

const forSaleRoutes = require("./forSaleRoute");
const forRentRoutes = require("./forRentRoute");
const userRoutes = require("./userRoutes");

router.use("/forsale", forSaleRoutes);
router.use("/forrent", forRentRoutes);
router.use("/users", userRoutes);

module.exports = router;
