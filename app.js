const express = require('express');
const { routes } = require('./routes/apiTracker');
const cors = require('cors');


const PORT = process.env.PORT || 3000;
const app = express();

const PATH_INDEX = (`${__dirname}/views/index.html`);

app.use(cors())
app.use("/public",express.static("public"));
app.use("/api",routes);

app.get('/', (req, res) =>{
  res.sendFile(PATH_INDEX);
});

app.listen(PORT, ()=>{
  console.log(`El servidor inicio en el puerto: ${PORT}`);
});