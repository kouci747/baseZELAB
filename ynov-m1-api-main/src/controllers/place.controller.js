const Place = require('../models/place.model');
const User = require('../models/user.model');

// exports.createPlace = (req, res) => {
//   console.log(req.body.description);

//   Place.create(req.body)
//     .then((place) => res.send(place))
//     .catch((err) => res.status(400).send(err));
// };

//le controlleur createPlace touche à DEUX MODELES : PLACE ET USER : Avant d'enregistrer dans PLACE, il vérifie une condition dans USER
exports.createPlace = async (req, res) => {
  try {
    const {
      title,
      types,
      owner,
      pricing,
      images,
      capacity,
      description,
      address,
    } = req.body;
    const user = await User.findById(owner);
    if (!user) {
      return res.status(404).json({ error: 'Utilisateur introuvable' });
    }
    //Avant de save dans place.model, on vérifie dans un autre model -user.model- que l'user est bien un propriétaire(OWNER)
    //sinon, impossible car on ne peut créer un logement qu'en étant un proprio
    if (!user.typeUser.includes('owner')) {
      return res.status(403).json({
        error:
          'L utilisateur n est pas OWNER/propriétaire, il ne peut donc pas créer de place',
      });
    }

    const place = new Place({
      title,
      types,
      owner,
      pricing,
      images,
      capacity,
      description,
      address,
    });
    await place.save();
    user.places.push(place._id);
    await user.save();
    return res.status(201).json({ place });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: 'Echec de la création d une nouvelle Place' });
  }
};

exports.getPlaces = (req, res) => {
  Place.find()
    .populate('owner')
    .then(
      (places) => res.send(places)
      //.catch((err) => res.status(400).send(err))
    );
};

// exports.getMyPlaces = (req, res) => {
//   User.findById(req.userToken.id).populate('places').then(
//     (user) => {

//     }
//   )
// }

// const Place = require('../models/place.model');

// exports.createPlace = (req, res) => {
//   // const newPlace = new Place({
//   //   name: req.body.name
//   // })
//   Place.create(req.body).then(
//     (place) =>
//       res.send(place)
//   )
//     .catch(err => res.status(400).send(err));
// }

// exports.getPlaces = (req, res) => {
//   Place.find().populate('owner').then(
//     (places) => res.send(places)
//     .catch(err => res.status(400).send(err)))
// }
