const express = require("express");
const router = express.Router();

module.exports = function (db) {
  router.get('/products', (req, res, next) => {
    res.send(db.get('products').value());
  })
  return router;
};
