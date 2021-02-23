const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const sala = require("./routes/sala");
const funcion = require("./routes/funcion");
const asiento = require("./routes/asiento");
const ticket = require("./routes/ticket");

const app = express();
app.use(bodyparser.json()); //Agregar plugins a express
app.use(cors()); //Agregar plugin a express

mongoose.connect(
  process.env.DB_URI, //`mongodb+srv://existro:Maniac00!@existro.jtfcs.mongodb.net/cineilu?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/sala", sala);
app.use("/funcion", funcion);
app.use("/asiento", asiento);
app.use("/ticket", ticket);
app.use("/", (req, res) => {
  res.send("ApiRest Cine Alexis");
});

//module.exports = app;

app.listen(5000);
//CCTT-57NC-A383
