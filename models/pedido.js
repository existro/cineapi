const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pedido = mongoose.model(
  "Pedido",
  new Schema(
    {
      nombre: String,
      total: Number,
    },
    { timestamps: true }
  )
);
module.exports = Pedido;
