const Place = require('../models/place.model');

exports.createPlace = (req, res) => {
  // const newPlace = new Place({
  //   name: req.body.name
  // })
  Place.create({ ...req.body, owner: res.locals.id })
    .then((place) => {
      console.log(place._id);
      // $set
      // const user = User.findById(req.userToken.id);
      // user.places.push(place._id);
      // user.save();
      res.send(place);
    })
    .catch((err) => {
      res.status(400).send(err);
      console.log(err);
    });
};

exports.getPlaces = (req, res) => {
  Place.find()
    .populate('owner')
    .then((places) => res.send(places))
    .catch((err) => res.status(400).send(err));
};

exports.deleteOnPlace = (req, res) => {
  Place.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send('place deleted');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};
exports.updatePlace = (req, res) => {
  console.log(req.params, 'PARAMS');
  console.log(req.body, 'BODY');
  Place.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((Place) => {
      if (!Place) {
        return res.status(404).send({ message: 'user not found' });
      }
      res.send(Place);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
exports.getMyPlace = (req, res) => {
  User.findById(res.locals.id)
    .populate('places')
    .then((user) => {
      res.send(user.places);
    });
};

exports.getPlaceById = (req, res) => {
  Place.findById(req.params.id)
    .populate('owner')
    .populate('types')
    .then((places) => res.send(places))
    .catch((err) => res.status(400).send(err));
};
