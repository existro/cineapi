const express = require("express");
const Detallepedido = require("../models/detallepedido");

const router = express.Router();
//*Obtener el listado de todos los registros
router.get("/", (req, res) => {
  Detallepedido.find()
    .exec()
    .then((x) => res.status(200).send(x));
});
//*Obtener un registro
router.get("/:id", (req, res) => {
  Detallepedido.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});
//*Insertar un nuevo registro
router.post("/", (req, res) => {
  Detallepedido.create(req.body).then((x) => res.status(201).send(x));
});
//*Actualizar el registro
router.put("/:id", (req, res) => {
  Detallepedido.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});
//*Eliminar el registro
router.delete("/:id", (req, res) => {
  Detallepedido.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
