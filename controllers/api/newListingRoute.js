const router = require("express").Router();
const { Property, User, ListingPhotos } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

function updateDropdown(option) {
  document.querySelector(".dropdown-toggle").textContent = option;
}

router.put("/", withAuth, async (req, res) => {
  // const streetName = get
});

module.exports = router;
