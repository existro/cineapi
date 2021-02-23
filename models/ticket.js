const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Ticket = mongoose.model(
  "Ticket",
  new Schema(
    {
      idfuncion: { type: Schema.Types.ObjectId, ref: "Funcion" },
      idasiento: { type: Schema.Types.ObjectId, ref: "Asiento" },
      numero: Date,
      fila: Number,
    },
    { timestamps: true }
  )
);
module.exports = Ticket;
