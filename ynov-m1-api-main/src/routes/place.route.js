const express = require("express");
const router = express.Router();
const PlaceController = require("../controllers/place.controller");

router.get("/getPlaces", PlaceController.getPlaces);
router.post("/createPlace", PlaceController.createPlace);

module.exports = router;
