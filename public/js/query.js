$(document).ready(function () {
    console.log('test')

    var queryForm = $("#query");
    var roleCategorySelect = $("#roleID");

    function getFreelancer(role) {
        var roleString = role || "";
        if (roleString) {
            roleString = "/role/" + roleString;
        }
        $.get("/api/freelancer/role" + roleString, function (data) {
            console.log("role", data);
            role = data;
            createNewCard();
        });
    }

    function createNewCard(query) {
        var $newInputCard = $(
            [
                "<div class='card' style='width: 18rem;'>",
                "<img class='card-img-top' src='https://usatlebronwire.files.wordpress.com/2018/07/bronscowel.jpg?w=1000&h=600&crop=1'alt='Card image cap'>",
                "<div class='card-body'>",
                "<h5 class='card-title'>Card title</h5>",
                "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the cards content.</p>",
                "</div>",
                "<ul class='list-group list-group-flush'>",
                "</li>",
                "<li class='list-group-item'>Cras justo odio</li>",
                "<li class='list-group-item'>Dapibus ac facilisis in</li>",
                "<li class='list-group-item'>Vestibulum at eros</li>",
                "</ul>",
                "<div class='card-body'>",
                "<a href='#' class='card-link'>Card link</a>",
                "<a href='#' class='card-link'>Another link</a>",
                "</div>",
                "</div>"
            ].join("")
        );
        return $newInputCard;
    }
})