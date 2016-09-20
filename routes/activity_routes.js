var activity = require('../app/models/activity');
var activityController = require('../app/controllers/activity');
var express = require('express');
var router = express.Router();

router.route('/activities')
  .get(activityController.getAllActivities)
  .post(activityController.addNewActivity)
  .delete(activityController.deleteActivityCollection);


router.route('/activities/:id')
  .get(activityController.getSingleActivity);

router.route('/activities/:id')
  .delete(activityController.deleteSingleActivity);


module.exports = router;
