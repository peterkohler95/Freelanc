var db = require("../models");
var path = require('path');

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/company", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/company.html"));
  });

  app.get("/freelancer", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/freelancer.html"));
  });

  app.get("/freelancers_search", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/freelancers_search.html"));
  });

  app.get("*", function (req, res) {
    res.render("404");
  });
};