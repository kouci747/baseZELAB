function verifyOwner(req, res, next) {
  if (!req.userToken.isOwner) {
    return res.status("401").send({
      auth: false,
      message: "You must be an Admin",
    });
  }
  next();
}

module.exports = verifyAdmin;
