const userModel = require('../models/user.model.js');
const User = require('../models/user.model.js');

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.userToken.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found',
        });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.getOneUser = (req, res) => {
  User.findById(req.userToken.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: 'User not found',
        });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

exports.deleteOneUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) =>
      res.send({ message: `user with id ${user._id} successfully deleted` })
    )
    .catch((err) => res.status(400).send(err));
};

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => res.send(err));
};
//par défaut, un utilisateur n'est que CUSTOMER, ce controlleur permet de lui ajouter un autre role, (owner donc)
exports.addRole = async (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { typeUser: req.body.roleToAdd } },
    { new: true, upsert: true },
    (err, docs) => {
      if (!err) res.status(201).json(docs);
      else return res.status(400).jsos(err);
    }
  );
};

//éventuellement, retirer un role à un utilisateur (OWNER OU CUSTOMER)
exports.removeRole = async (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $pull: { typeUser: req.body.roleToRemove } },
    { new: true, upsert: true },
    (err, docs) => {
      if (!err) res.status(201).json(docs);
      else return res.status(400).jsos(err);
    }
  );
};

/*
 UserModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { following: req.body.idToFollow } },
      { new: true, upsert: true },
      (err, docs) => {
        if (!err) res.status(201).json(docs);
        else return res.status(400).jsos(err);
      }
    );*/
