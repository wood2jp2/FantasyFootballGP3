const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var InjurySchema = new Schema ({
  name: String,
  position: String,
  status: String,
  date: String
});

var InjuryUpdate = mongoose.model('InjuryUpdate', InjurySchema);

module.exports = InjuryUpdate;
