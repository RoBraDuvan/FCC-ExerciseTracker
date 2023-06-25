const { mongoose } = require("../data/conectionBD.js");


const Schema = new mongoose.Schema({
  username: {type: String, required: true},
});


let user = mongoose.model("user", Schema);

module.exports.user = user;