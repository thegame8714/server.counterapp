var User = require('../models/user');
var userActivity = require('../models/userActivity');
var userFunction = require('./users/users')

exports.getAllUsers = (req,res) => {
  userFunction.getUsers((err,users) => {
    if(err)
      res.send(err)

     res.json(users)
  })
}

exports.addNewUser = (req,res) => {
  userFunction.addNewUser(req.body,(err,users) => {
    if(err)
      res.send(err)

     res.json(users)
  })
}

exports.getSingleUser = (req, res) => {
  userFunction.getUserById(req.params,(err,users) => {
    if(err)
      res.send(err)

     res.json(users)
  })
}

exports.deleteSingleUser = (req, res) => {
  userFunction.deleteUser(req.params, (err, user) => {
    if(err)
       res.send(err);

    res.json('User ' + req.params.id + ' has been deleted successfully');
  })
}

exports.deleteUserCollection = (req,res) => {
  userFunction.deleteAllUsers((err, user) => {
    if(err)
       res.send(err);

    res.json('All users have been cancelled');
  })
}
