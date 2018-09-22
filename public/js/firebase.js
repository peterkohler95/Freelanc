firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in
        $(".loginCover").hide();

        var dialog = document.querySelector("#loginDialog");
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        dialog.close();
    } else {
        // No user is signed in
        $(".loginCover").hide();

        var dialog = document.querySelector("#loginDialog");
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        dialog.showModal();
    }
})

/* Login In */

$("#loginBtn").click(
    function () {
        var email = $("#loginEmail").val();
        var password = $("#loginPassword").val();
        if (email != "" && password != "") {

            $("#loginProgess").show();
            $("#loginBtn").hide();

            firebase.auth.signInWithEmailAndPassword(email, password).catch(function () {
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

    }, function (error) {
        alert(error.message);
    })
})