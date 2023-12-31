const express = require("express");
const bodyParser = require("body-parser");

const { saveUser, findAllUsers } = require("../controller/createUser.js")
const { saveTracker, exercisesLog } = require("../controller/createTracker.js");


const routes = express.Router();


routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());

//------------------------------------------------
routes.get("/", (req, res)=>{
  res.json({"Message": "Bienvenido"});
})

//-------------------------------------------------
routes.get("/users", async (req, res) =>{
  let usuarios = await findAllUsers();

  res.json(usuarios);
});

routes.post("/users",async (req, res)=>{
  const { username } = req.body;
  const user = await saveUser(username)
    .then(u => res.json(u));
});

//-------------------------------------------------
routes.get("/users/:id/logs", async(req, res)=>{
  
  let { id } = req.params;
  res.json(await exercisesLog(id, req.query));
});

//-----------------------------------------------
routes.post("/users/:id/exercises", (req, res)=>{

  const { id } = req.params;
  const {description, duration, date} = req.body;

  saveTracker(id ,req.body)
    .then(inf => res.json({
      "_id": inf.id_user,
      "username": inf.username,
      "description": inf.description,
      "duration": inf.duration,
      "date": inf.date
    }))
    .catch(e => res.json({error : e}));

});

module.exports = {
  routes
};