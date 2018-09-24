$(document).ready(function () {
    console.log('test')
    var resultsContainer = $(".results-container");
    $("#submit").on("click", handleCategoryChange);
    var queryCategorySelect = $("#roleID");
    var results;


    function getResults(category) {
        var categoryString = category;
        // if (categoryString) {
        //     categoryString = "/role/" + categoryString;
        // }
        $.get("/api/freelancer/role/" + categoryString, function (data) {
            console.log("role", data);
            var posts = data;
            if (!posts || !posts.length) {
                displayEmpty();
            } else {
                initializeRows(posts);
            }
        });
    }

    function initializeRows(data) {

        resultsContainer.empty();
        var resultsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            resultsToAdd.push(createNewRow(data[i]));
        }
        resultsContainer.append(resultsToAdd);
    }

    function createNewRow(post) {
        var newQueryCard = $("<div>");
        newQueryCard.addClass("card");

        var newQueryCardHeading = $("<div>");
        newQueryCardHeading.addClass("card-header");

        var newQueryTitle = $("<h2>");
        var newQueryDate = $("<small>");
        var newQueryCategory = $("<h5>");
        newQueryCategory.text(post.location);
        newQueryCategory.css({
            float: "right",
            "font-weight": "700",
            "margin-top": "-15px"
        });

        var newQueryCardBody = $("<div>");
        newQueryCardBody.addClass("card-body");

        var newQueryBody = $("<div>");
        newQueryTitle.text(post.name + " ");

        newQueryBody.append("<h5 id='bio'>Biography");
        newQueryBody.append(post.bio);
        newQueryBody.append("<br><br>")

        newQueryBody.append("<h5 id='skills'>Skills");
        newQueryBody.append(post.skills);
        newQueryBody.append("<br><br>")

        newQueryBody.append("<h5 id='portfolio'>Portfolio");
        newQueryBody.append(post.portfolio);
        newQueryBody.append("<br>")

        newQueryTitle.append(newQueryDate);
        newQueryCardHeading.append(newQueryTitle);
        newQueryCardHeading.append(newQueryCategory);
        newQueryCardBody.append(newQueryBody);
        newQueryCard.append(newQueryCardHeading);
        newQueryCard.append(newQueryCardBody);
        newQueryCard.data("post", post);
        return newQueryCard;
    }


    function displayEmpty() {
        resultsContainer.empty();
        var messageH2 = $("<h2>");
        messageH2.css({
            "text-align": "center",
            "margin-top": "50px"
        });
        messageH2.html("Please select from one of the categories above to chose a desired role from your freelancer");
        resultsContainer.append(messageH2);
    }

    function handleCategoryChange(event) {
        event.preventDefault();
        var newQueryCategory = $("#roleID").val();
        console.log(newQueryCategory);
        getResults(newQueryCategory);
    }
})