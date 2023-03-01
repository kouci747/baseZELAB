const jwt = require('jsonwebtoken');

function veriftyToken(req, res, next) {
  let token = req.headers.authorization;
  //si je n'ai pasde token =>renvoyer une erreur de type 403
  if (!token) {
    return res.status(403).send({
      auth: false,
      token: null,
      message: 'missing token',
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, (error, jwtDecoded) => {
    if (error) {
      return res.status(401).send({
        auth: false,
        token: null,
        message: 'non authorized',
      });
    }
    console.log(jwtDecoded);
    res.locals.id = jwtDecoded.id;
    req.userToken = jwtDecoded;
    next();
  });
  //utiliser lq foction verify de jwt

  // erreur le token a expire ,token modifier ,

  //si pas d erreur
}
module.exports = veriftyToken;
