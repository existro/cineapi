const express = require("express");
const Asiento = require("../models/asiento");

const router = express.Router();
//*Obtener el listado de todos los registros
router.get("/", (req, res) => {
  Asiento.find()
    .exec()
    .then((x) => res.status(200).send(x));
});
//*Obtener un registro
router.get("/:id", (req, res) => {
  Asiento.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});
//*Insertar un nuevo registro
router.post("/", (req, res) => {
  Asiento.create(req.body).then((x) => res.status(201).send(x));
});
//*Actualizar el registro
router.put("/:id", (req, res) => {
  Asiento.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});
//*Eliminar el registro
router.delete("/:id", (req, res) => {
  Asiento.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
