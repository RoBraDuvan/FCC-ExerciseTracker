const { tracker } = require("../model/modelTracker.js");

const { user } = require("../model/modelUser.js");


//-------------------------------------------------
const saveUser = async (newUser) =>{
  
  if (newUser){
    objectUser["username"]=newUser;

    let usuario = new tracker(objectUser);
  
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

//---------------------------------------------
const saveTracker = async (idUser, arrayUser)=>{
  let objectTracker = {};
  const {description, duration, date} = arrayUser;
  const usuario = await user.findById(idUser)

   if (usuario){
    objectTracker["id_user"]=usuario._id;
    objectTracker["username"]=usuario.username;
    objectTracker["description"] = description;
    objectTracker["duration"] = duration;
    objectTracker["date"] = date? new Date(date).toDateString(): new Date().toDateString();
  };
  
  let t = new tracker(objectTracker);

  let newT = await t.save();

  return objectTracker;

  // let datos = await tracker.findByIdAndUpdate(idUser,  {description, duration, d});

};

module.exports = {
  saveTracker
};