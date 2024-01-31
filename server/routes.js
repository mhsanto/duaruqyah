// routes.js
const express = require("express");
const router = express.Router();
const db = require("./db");

// Endpoint to fetch categories
router.get("/categories", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ category: rows });
  });
});

// Endpoint to fetch sub_category
router.get("/subcategories", (req, res) => {
  db.all("SELECT * FROM sub_category", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ sub_category: rows });
  });
});

// Endpoint to fetch duas
router.get("/duas", (req, res) => {
  db.all("SELECT * FROM dua", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ dua: rows });
  });
});

module.exports = router;
