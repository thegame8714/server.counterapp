var Activity = require('../models/activity');
var userActivity = require('../models/userActivity');
var activityFunction = require('./activities/activities')

exports.getAllActivities = (req, res) => {
  activityFunction.getActivities((err, activities) => {
    if(err)
      res.send(err);

    res.json(activities);
  });
}

exports.addNewActivity = (req, res) => {
  activityFunction.addNewActivity(req.body,(err,activty) => {
    if(err)
      res.send(err)

     res.json(activty)
  })
  callback(err, response)
}

exports.getSingleActivity = (req,res) => {
  activityFunction.getActivityById(req.params, (err, activity) => {
    if(err)
      res.send(err);

    res.json(activity);
  });
}

exports.deleteSingleActivity = (req,res) => {
  activityFunction.deleteActivity(req.params, (err, activity) => {
    if(err)
       res.send(err);

    res.json('Activity ' + req.params.id + ' has been deleted successfully');
  })
}

exports.deleteActivityCollection = (req,res) => {
  activityFunction.deleteAllActivities((err, activity) => {
    if(err)
       res.send(err);

    res.json('All users have been cancelled');
  })
}
