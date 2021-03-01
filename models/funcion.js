const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Funcion = mongoose.model(
  "Funcion",
  new Schema(
    {
      idsala: { type: Schema.Types.ObjectId, ref: "Sala" },
      inicio: Date,
      duracion: Number,
      precio: Number,
      active: Boolean,
    },
    { timestamps: true }
  )
);
module.exports = Funcion;
