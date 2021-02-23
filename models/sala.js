const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Sala = mongoose.model(
  "Sala",
  new Schema(
    {
      nombre: String,
      idmovie: String,
      inicio: Date,
      fin: Date,
    },
    { timestamps: true }
  )
);
module.exports = Sala;
