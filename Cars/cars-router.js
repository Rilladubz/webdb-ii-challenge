const express = require("express");
const knex = require("../data/dbConfig");

const db = require("../data/dbConfig");

const router = express.Router();

// function handlers
router.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then(cars => {
      res.status(200).json({ cars });
    })
    .catch(err => {
      res.status(404).json({ errorMessage: "Sorry, no cars founud", err });
    });
});
//middleware

module.exports = router;
