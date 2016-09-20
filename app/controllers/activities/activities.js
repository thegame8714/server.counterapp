var Activity = require('../../models/activity');

exports.getActivities = (callback) => {
  Activity.find({},(err, users) => {
      callback(err,users)
  })
}

exports.getActivityById = (params,callback) => {
  Activity.findById(params.id, function(err, user) {
    callback(err,user)
  })
}

exports.addNewActivity = (params, callback) => {
  let activity = new Activity()

  activity.name = params.name
  activity.type = params.type

  activity.save((err) => {
    callback(err)
  })
}

exports.deleteActivity = (params, callback) => {
  Activity.remove({_id: params.id},function(err,user) {
     callback(err, user)
   })
}

exports.deleteAllActivities = (callback) => {
  Activity.remove({}, function(err) {
    callback(err)
  })
}
