$(document).ready(function () {

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

    $.post("/api/freelancer", newFreelancer);
    window.location.href = "/";
  };

  $("#submit").on("click", onSubmit)
})