const { mongoose } = require("../data/conectionBD.js");


const Schema = new mongoose.Schema({
  id: {type: String, required: true},
  username: {type: String, required: true},
  description: {type: String, required: true},
  duration : {type: Number, required: true},
  date : {type: String, required: true}
});


let tracker = mongoose.model("tracker", Schema);

module.exports.tracker = tracker;