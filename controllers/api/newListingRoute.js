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

router.post("/", `upload`.single("photo"), async (req, res) => {
  try {
    let listingInfo = Object.assign(req.body, { ownerID: req.session.user_id });

    const newListing = await Property.create({
      ...listingInfo,
    });

    const photos = req.files;

    const listingID = req.body.listingID;

    const listing = await ListingPhotos.findByPk(listingID);

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    if (photos) {
      const uploadedPhotos = await Promise.all(
        photos.map(async (photo) => {
          const listingPhoto = await ListingPhotos.create({
            filename: photo.filename,
            listingID: listingID,
          });
          return listingPhoto;
        })
      );
    }
    res.status(200).json({ newListing });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
