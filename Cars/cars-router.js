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

router.post("/", validateBody, (req, res) => {
  db("cars")
    .insert(req.body, "id")
    .then(ids => {
      const id = ids[0];

      return db("cars")
        .select("vin", "year", "make", "model")
        .where({ id })
        .first()
        .then(car => {
          res.status(201).json({ car });
        });
    })
    .catch(err => {
      res
        .status(500)
        .json({ errorMessage: "Error while trying to post new car" });
    });
});

//middleware

function validateBody(req, res, next) {
  const body = req.body;

  if (body.model < 1) {
    res.status(400).json({ errorMessage: "Model is required!" });
  } else if (body.vin < 1) {
    res.status(400).json({ errorMessage: "Vin is required!" });
  } else if (body.year < 1) {
    res.status(400).json({ errorMessage: "Year is required!" });
  } else if (body.make < 1) {
    res.status(400).json({ errorMessage: "Make is required!" });
  } else if (body.mileage < 1) {
    res.status(400).json({ errorMessage: "Mileage is required!" });
  } else if (body.transmission < 1) {
    res.status(400).json({ errorMessage: "Transmission is required!" });
  } else {
    next();
  }
}

module.exports = router;
