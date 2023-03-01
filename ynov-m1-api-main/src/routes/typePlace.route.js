const express = require('express');
const router = express.Router();
const typePlaceController = require('../controllers/typePlace.controller');

router.get('/getTypesPlaces', typePlaceController.getTypesPlace);
router.post('/createTypePlace', typePlaceController.createTypePlace);

module.exports = router;
