const express = require("express");
const Sala = require("../models/sala");

const router = express.Router();
//*Obtener el listado de todos los registros
router.get("/", (req, res) => {
  Sala.find()
    .exec()
    .then((x) => res.status(200).send(x))
    .catch((err) => console.log("Error al obtener: " + err));
});
//*Obtener un registro
router.get("/:id", (req, res) => {
  Sala.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});
//*Insertar un nuevo registro
router.post("/", (req, res) => {
  Sala.create(req.body).then((x) => res.status(201).send(x));
});
//*Actualizar el registro
router.put("/:id", (req, res) => {
  Sala.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});
//*Eliminar el registro
router.delete("/:id", (req, res) => {
  Sala.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
