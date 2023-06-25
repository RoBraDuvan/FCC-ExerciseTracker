const mongoose = require("mongoose");
require("dotenv").config();

try {
  mongoose.connect(process.env.URI);
} catch (error) {
  console.log(error)
}




module.exports.mongoose = mongoose;