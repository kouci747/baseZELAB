const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');
const verifyAdmin = require('../middlewares/verifyAdmin');

router.get('/users', verifyToken, verifyAdmin, userController.getUsers);
router.get('/', verifyToken, userController.getOneUser);
router.put('/', verifyToken, userController.updateUser);
router.delete('/:id', userController.deleteOneUser);

router.patch('/addRole/:id', userController.addRole);
router.patch('/removeRole/:id', userController.removeRole);

module.exports = router;
