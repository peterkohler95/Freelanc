firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("You logged in");
        // User is signed in
        $(".loginCover").hide();

        var dialog = document.querySelector("#loginDialog");
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        dialog.close();
    } else {
        // No user is signed in
        $(".loginCover").show();

        var dialog = document.querySelector("#loginDialog");
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        dialog.showModal();
    }
})

/* Login */
var login = function () {
    var email = $("#loginEmail").val();
    var password = $("#loginPassword").val();
    if (email != "" && password != "") {

        $("#loginProgess").show();
        $("#loginBtn").hide();

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            $("#loginError").show().text(error.message);

            $("#loginProgess").hide();
            $("#loginBtn").show();
        });
    }
}

//Login on click
$("#loginBtn").click(
    login()
);

//Login on enter keypress
$(document).bind("keyup", function (e) {
    if (e.which == 13) {
        login()
    }
});

/* Sign Up */
$("#btnSignUp").click(
    function () {
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();
        if (email != "" && password != "") {

            $("#loginProgess").show();
            $("#loginBtn").hide();

            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                $("#loginError").show().text(error.message);

                $("#loginProgess").hide();
                $("#loginBtn").show();
            })
        }
    }
)

/* Log Out */
$("#signOutBtn").click(function () {
    firebase.auth().signOut().then(function () {
        location.reload();
    }, function (error) {
        alert(error.message);
    })
})