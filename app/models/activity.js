var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  name: String,
  type: String,
})

module.exports = mongoose.model('Activity', ActivitySchema);
