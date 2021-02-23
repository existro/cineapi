const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Detallepedido = mongoose.model(
  "Detallepedido",
  new Schema(
    {
      idPedido: { type: Schema.Types.ObjectId, ref: "Pedido" },
      idticket: { type: Schema.Types.ObjectId, ref: "Ticket" },
      iditem: { type: Schema.Types.ObjectId, ref: "Item" },
      numero: Date,
      fila: Number,
    },
    { timestamps: true }
  )
);
module.exports = Detallepedido;
