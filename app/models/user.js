var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  address_street_line_1: String,
  address_street_line_2: String,
  address_street_line_3: String,
  post_code: String,
  country: String,
  verified: Boolean
})

module.exports = mongoose.model('User', UserSchema);
