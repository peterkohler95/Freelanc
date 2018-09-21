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

  app.post("/api/candidates", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Candidate.create({
      full_name: req.body.full_name,
      location: req.body.location,
      references: req.body.references,
      bio: req.body.bio,
      role: req.body.role,
      skills: req.body.skills,
      pay_pal: req.body.pay_pal
    }).then(function (dbNewClients) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbNewClients);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};