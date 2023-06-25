const express = require("express");
const bodyParser = require("body-parser");

const { saveUser } = require("../controller/createUser.js")
const { saveTracker } = require("../controller/createTracker.js");

const routes = express.Router();


routes.use(bodyParser.urlencoded({extended: true}));
routes.use(bodyParser.json());

routes.get("/", (req, res)=>{
  res.json({"Message": "Bienvenido"});
})

routes.post("/users", async (req, res)=>{
  const { username } = req.body;
  const user = await saveUser(username)
    .then(u => res.json(u));
});

routes.post("/users/:id/exercises", (req, res)=>{
  const { id } = req.params;
  const {description, duration, date} = req.body;

  saveTracker(id ,req.body)
    .then(inf => res.json(inf));

});

module.exports = {
  routes
};