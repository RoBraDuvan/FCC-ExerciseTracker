const { user } = require("../model/modelUser.js");

let objectUser = {};

//-------------------------------------------------
const saveUser= async (newUser) =>{
  
  if (newUser){
    objectUser["username"]=newUser;

    let usuario = new user (objectUser);
  
    await usuario.save() 
      .then((u) => objectUser["_id"]= u._id)
      .catch(e =>console.log(e));

    console.clear();
    console.log(`Datos guardados: ${JSON.stringify(objectUser)}`);
    return objectUser;

  }else {
    return {"error" : "error"};
  };
};

const findUsers = async() =>{
  let finds = await user.find();

  return finds;
};

module.exports = {
  saveUser, 
  findUsers
}