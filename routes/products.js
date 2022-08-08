const express = require("express");
const router = express.Router();

module.exports = function (db) {
  router
    .route("/products")
    .get((req, res, next) => {
      res.send(db.get("products").value());
    })
    .post((req, res, next) => {
      const newProduct = req.body;
      res.send(db.get("products").insert(newProduct).write());
    });

  router
    .route("/products/:id")
    .get((req, res, next) => {
      const id = req.params.id;
      const value = db.get("products").find({ id: id }).value();
      if (value) {
        res.send(value);
      } else {
        res.status(404).send();
      }
    })
    .patch((req, res, next) => {
      const id = req.params.id;
      res.send(db.get("products").find({ id: id }).assign(req.body).write());
    })
    .delete((req, res, next) => {
      const id = req.params.id;
      db.get("products").remove({ id: id }).write();
      res.status(204).send();
    });

  return router;
};
