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
//Agregar plugins a express
app.use(bodyparser.json()); 
app.use(cors()); 

//Conexion a la base de datos
mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//agregar las rutas
app.use("/sala", sala);
app.use("/funcion", funcion);
app.use("/asiento", asiento);
app.use("/ticket", ticket);
app.use("/", (req, res) => {
  res.send("ApiRest Cine IlU");
});

//module.exports = app;

app.listen(5000);
//CCTT-57NC-A383
