const router = require('express').Router();

const forSaleRoutes = require('./forSaleRoute');
const forRentRoutes = require('./forRentRoute');

router.use('/forsale',forSaleRoutes);
router.use('/forrent',forRentRoutes);

module.exports = router;