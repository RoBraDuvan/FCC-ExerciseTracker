const { user } = require("../model/modelUser.js");

//-------------------------------------------------
const saveUser= async (newUser) =>{
  
  if (newUser){

    let usuario = new user ({username: newUser});
  
    let u = await usuario.save();

    return {
      "_id":u._id,
      "username": u.username
    };

  }else {
    return {"error" : "error"};
  };
};

const findAllUsers = async() =>{
  
  let finds = await user.find();

  return finds.map(u => ({
    "_id" : u._id,
    "username" : u.username
  }));

};

module.exports = {
  saveUser, 
  findAllUsers
};