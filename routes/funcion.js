const express = require("express");
const Funcion = require("../models/funcion");

const router = express.Router();

router.get("/", (req, res) => {
  Funcion.find()
    .exec()
    .then((x) => res.status(200).send(x));
});
router.get("/:id", (req, res) => {
  Funcion.findById(req.params.id)
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  Funcion.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/:id", (req, res) => {
  Funcion.findOneAndUpdate(req.params.id, req.body).then(() =>
    res.sendStatus(204)
  );
});

router.delete("/:id", (req, res) => {
  Funcion.findByIdAndDelete(req.params.id)
    .exec()
    .then(() => res.sendStatus(204));
});

module.exports = router;
