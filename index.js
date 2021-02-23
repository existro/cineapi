const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config;

const sala = require("./routes/sala");
const funcion = require("./routes/funcion");
const asiento = require("./routes/asiento");
const ticket = require("./routes/ticket");

const app = express();
app.use(bodyparser.json()); //Agregar plugins a express
app.use(cors()); //Agregar plugin a express

mongoose.connect(
  `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@existro.jtfcs.mongodb.net/${process.env.BDNAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("Conectado a Mongo!")
); //!Conectarse a mongo db

app.use("/sala", sala);
app.use("/funcion", funcion);
app.use("/asiento", asiento);
app.use("/ticket", ticket);

//module.exports = app;

app.listen(3000);
//CCTT-57NC-A383
