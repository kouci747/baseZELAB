const user = require('../models/user.model');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const { signJwt } = require('../helpers/signJwt.js');

exports.register = (req, res, next) => {
  //cryptmdp
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const newUser = new user({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
  });

  newUser
    .save()
    .then((user) => {
      //token
      const userToken = jwt.sign(
        { id: user.id, isAdmin: user.isAdmin },
        process.env.JWT_SECRET
      );
      res.send({ token: userToken, user: user, isAdmin: user.isAdmin });
      //return res.send(token);
    })
    .catch((err) => {
      next(err);
    });
};
exports.login = (req, res) => {
  user
    .findOne({ email: req.body.email })
    .then((user) => {
      // console.log(user)
      if (!user) {
        return res.status(404).send({
          message: 'User not found',
          auth: false,
        });
      }
      let isPasswordValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!isPasswordValid) {
        return res.status(401).send({
          message: 'password not valid',
          auth: false,
        });
      }
      const userToken = signJwt(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET
      );

      res.send({
        auth: true,
        message: 'User logged',
        token: userToken,
        user: user,
        isAdmin: user.isAdmin,
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};
