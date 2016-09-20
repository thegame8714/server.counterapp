var User = require('../../models/user');

exports.getUsers = (callback) => {
  User.find({},(err, users) => {
      callback(err,users)
  })
}

exports.getUserById = (params,callback) => {
  User.findById(params.id, function(err, user) {
    callback(err,user)
  })
}

exports.addNewUser = (params, callback) => {
  var user = new User()
  user.first_name =  params.first_name
  user.last_name = params.last_name
  user.address_street_line_1 = params.address_street_line_1
  user.address_street_line_2 = params.address_street_line_2
  user.address_street_line_3 = params.address_street_line_3
  user.post_code = params.post_code
  user.country = params.country
  user.verified = true

  // TODO: try to add a nice message in return

  user.save((err,message) => {
    callback(err,user,message)
  });
}

exports.deleteUser = (params, callback) => {
  User.remove({_id: params.id},function(err,user) {
     callback(err, user)
   })
}

exports.deleteAllUsers = (callback) => {
  User.remove({}, function(err) {
    callback(err)
  })
}
