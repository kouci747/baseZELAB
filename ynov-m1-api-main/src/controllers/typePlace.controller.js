const TypePlace = require('../models/typePlace.model.js');
const Place = require('../models/place.model');

exports.createTypePlace = (req, res) => {
  const newTypePlace = new TypePlace(req.body);
  newTypePlace
    .save()
    .then((typePlace) => res.send(typePlace))
    .catch((err) => res.status(400).send(err));
};

exports.getTypesPlace = (req, res) => {
  TypePlace.find()
    .then((typePlace) => {
      res.send(typePlace);
    })
    .catch((err) => res.status(400).send(err));
};
exports.getTypePlaceById = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ placeType: false, message: 'Id not provided' });
  }

  TypePlace.findById(id)
    .then((TypePlace) => {
      if (!TypePlace)
        return res.status(404).send({
          message: `Place type with id: ${id} doesn't exist`,
          TypePlace: false,
        });
      return res.send({
        message: `Place type with id: ${id} successfully fetched`,
        TypePlace: TypePlace,
      });
    })
    .catch((err) => res.status(500).send(err));
};

exports.updateTypePlace = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ updated: false, TypePlace: false, message: 'Id not provided' });
  }

  TypePlace.findByIdAndUpdate([id], req.body, { new: true }, (err, data) => {
    if (err) {
      return res
        .status(500)
        .send({ updated: false, TypePlace: false, message: err });
    }

    res.json({
      updated: true,
      typePlace: data,
      message: `Place type with id: ${id} successfully updated`,
    });
  });
};

exports.deleteTypePlace = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ deleted: false, message: 'Id not provided' });
  }

  Place.findOne({ type: id })
    .then((r) => {
      if (!r) {
        return res.status(400).json({
          deleted: false,
          message:
            'Cannot delete this place type, Places with this type already exist',
        });
      } else {
        TypePlace.findByIdAndRemove([id], {}, (err, data) => {
          if (err)
            return res.status(500).send({ deleted: false, message: err });
          return res.json({
            deleted: true,
            message: `Place type with id: ${id} successfully deleted`,
          });
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({ deleted: false, message: err });
    });
};
