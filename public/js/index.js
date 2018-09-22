$(document).ready(function () {
  console.log('test')

  function onSubmit(event) {

    event.preventDefault();

    var newFreelancer = {
      name: $('#nameID').val().trim(),
      location: $('#locationID').val().trim(),
      portfolio: $('#portfolioID').val().trim(),
      bio: $('#bioID').val().trim(),
      role: $('#roleID').val().trim(),
      skills: $('#skillsID').val().trim(),
      email: $('#emailID').val().trim()
    }
    console.log(newFreelancer);
    $.post("/api/freelancer", newFreelancer);
  };

  $("#submit").on("click", onSubmit)
})