var db = require("../models");

module.exports = function (app) {
  // Get all examples
  // app.get("/api/examples", function (req, res) {
  //   db.Example.findAll({}).then(function (dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  // app.post("/api/examples", function (req, res) {
  //   db.Example.create(req.body).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  app.post("/api/freelancer", function (req, res) {
    var data = req.body;

    db.freelancer.create({
      name: data.name,
      location: data.location,
      portfolio: data.portfolio,
      bio: data.bio,
      role: data.role,
      skills: data.skills,
      email: data.email
    }).then(function (newFreelancer) {
      res.json(newFreelancer);
    });
  });

};