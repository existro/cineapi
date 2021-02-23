const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Item = mongoose.model(
  "Item",
  new Schema(
    {
      nombre: String,
      precio: Number,
      img: String,
    },
    { timestamps: true }
  )
);
module.exports = Item;
