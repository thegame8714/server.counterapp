var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userActivitySchema = new Schema({
  user_id: String,
  activity_id: String,
  duration: String
});

module.exports = mongoose.model('userActivity', userActivitySchema);
