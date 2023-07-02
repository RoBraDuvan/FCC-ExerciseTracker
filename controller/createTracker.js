const { tracker } = require("../model/modelTracker.js");

const { user } = require("../model/modelUser.js");


//---------------------------------------------
const saveTracker = async (idUser, arrayUser)=>{
  let objectTracker;
  const {description, duration, date} = arrayUser;
  const usuario = await user.findById(idUser)

  if (usuario){
    objectTracker = {
      "id_user": usuario._id,
      "username": usuario.username,
      description,
      duration,
      "date": date?new Date(date).toDateString():new Date().toDateString()
    }
  };
  
  let t = new tracker(objectTracker);

  let newT = await t.save();

  return objectTracker;

};

const exercisesLog = async (id_user, query)=>{

  try {
    //----------------------------------------------
    //Recibimos los datos del query.
    let { limit, from, to } = query;
    let filtrosDate = {};
    //Si existe from y to, lo guardamos en el objeto
    if (from){
      filtrosDate[ "$gte" ] = new Date( from )
    };
    if (to){
      filtrosDate[ "$lte" ] = new Date ( to )
    };
    //Creamos y guardamos el id en un nuevo arreglo.
    let filtros = {
      id_user
    };

    //Guardamos el objeto filtrosDate en el filtro.
    filtros.date = filtrosDate

    /* {
    id: 'idadahidhadhahd',  
    date: { '$gte': 'fecha 1', '$lte': 'fecha 2' }    
    } */
    //------------------------------------------------

    const ex = await tracker.find(filtros).limit(limit);
  
    let log = ex.map(ex => ({
      "description" : ex.description,
      "duration": ex.duration,
      "date": ex.date.toDateString()
    }));
  
    console.log(ex);
    if (ex.length > 0){
      return {
        _id: ex[0]._id, 
        username: ex[0].username,
        count: ex.length,
        log
      };
    };

    throw "error";
  } catch (err) {
    console.error(err)
    return { error: "Este usuario no tiene ejercicios"};
  };
 
  };
  

module.exports = {
  saveTracker,
  exercisesLog
};