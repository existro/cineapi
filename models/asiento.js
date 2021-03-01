const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Asiento = mongoose.model(
  "Asiento",
  new Schema(
    {
      idsala: { type: Schema.Types.ObjectId, ref: "Sala" },
      numero: Number,
      fila: Number,
    },
    { timestamps: true }
  )
);
module.exports = Asiento;
