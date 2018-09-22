var db = require("../models");

module.exports = function (app) {
  app.get("/api/freelancer/role/:role", function (req, res) {
    db.Freelancer.findAll({
        where: {
          role: req.params.role
        }
      })
      .then(function (dbRole) {
        res.json(dbRole);
      });
  });

  app.post("/api/freelancer", function (req, res) {
    var data = req.body;

    db.Freelancer.create({
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