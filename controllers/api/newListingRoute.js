const router = require("express").Router();
const { userInfo } = require("os");
const { Property, ListingPhotos } = require("../../models");
const withAuth = require("../../utils/auth"); // users can post/delete so long as they are logged in

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  Property.findAll()
    .then((dbPropertyData) => res.json(dbPropertyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", upload.single("photo"), async (req, res) => {
  try {
    let listingInfo = Object.assign(req.body, { ownerID: req.session.user_id });

    console.log(listingInfo);

    const newListing = await Property.create({
      ...listingInfo,
    });

    const photo = req.file;

    const listingID = newListing.id;

    const newPhoto = await ListingPhotos.create({
      filename: req.file.filename,
      listingID: listingID,
    });

    if (listingInfo.listingType == "For Sale") {
      res.status(200).redirect("/");
    } else if (listingInfo.listingType == "For Rent") {
      res.status(200).redirect("/");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
