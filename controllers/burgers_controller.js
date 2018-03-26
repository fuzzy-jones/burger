var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
  });

// router.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers;", function(err, data) {
//         if (err) {
//             return res.status(500).end();
//         }
//         res.render("index", { burgers: data });
//         });
//   });


module.exports = router;