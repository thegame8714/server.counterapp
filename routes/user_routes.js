var userController = require('../app/controllers/user');
var express = require('express');
var router = express.Router();

console.log(userController.getAllUsers)

router.route('/users')
  .get(userController.getAllUsers)
  .post(userController.addNewUser)
  .delete(userController.deleteUserCollection);

router.route('/users/:id')
  .get(userController.getSingleUser);

router.route('/users/:id')
  .delete(userController.deleteSingleUser);


module.exports = router;
