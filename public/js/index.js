$(document).ready(function () {

  var onSubmit = function (event) {
    event.preventDefault();

    //Saves user input in new variable when submit button is clicked
    var newFreelancer = {
      name: $('#nameID').val().trim(),
      location: $('#locationID').val().trim(),
      portfolio: $('#portfolioID').val().trim(),
      bio: $('#bioID').val().trim(),
      role: $('#roleID').val().trim(),
      skills: $('#skillsID').val().trim(),
      email: $('#emailID').val().trim()
    }
  }
});