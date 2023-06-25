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

  const {description, duration, date} = arrayUser;

  const usuario = await user.findById(idUser);

  console.log(usuario);



  let d = new Date (date).toDateString();

  // let datos = await tracker.findByIdAndUpdate(idUser,  {description, duration, d});

};

module.exports = {
  saveTracker
};