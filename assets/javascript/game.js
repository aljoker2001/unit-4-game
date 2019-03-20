var blue = 0;
var purple = 0;
var titanium = 0;
var green = 0;
var match = 0;
var total = 0;
var wins = 0;
var losses = 0;
var button = $("<button>");


const randomNumbers = () => {
    blue = Math.floor(Math.random() * Math.floor(12)) + 1;
    purple = Math.floor(Math.random() * Math.floor(12)) + 1;
    titanium = Math.floor(Math.random() * Math.floor(12)) + 1;
    green = Math.floor(Math.random() * Math.floor(12)) + 1;
    match = Math.floor(Math.random() * Math.floor(102)) + 19;
    $("#match").text(match);
    $("#total").css("color", "white");
    total = 0;
    $("#total").text(total);
    console.log(blue, purple, titanium, green, match);
}

const winOrLose = () => {
    if (total > match) {
        button = $("<button>");
        button.text("Play Again?");
        button.attr("class", "btn btn-primary playButton");
        $("#loser").text("You Lose!");
        $("#total").css("color", "red");
        $(".playAgain").append(button);
        losses += 1;
        $("#loss").text(losses);
    } else if (total === match) {
        button = $("<button>");
        $("#winner").text("You Win!");
        button.text("Play Again?");
        button.attr("class", "btn btn-primary playButton");
        $(".playAgain").append(button);
        wins += 1;
        $("#win").text(wins);
    }
}

randomNumbers();

$("#blue").on("click", function() {
    total += blue;
    $("#total").text(total);
    winOrLose();
});

$("#purple").on("click", function() {
    total += purple;
    $("#total").text(total);
    winOrLose();
});

$("#titanium").on("click", function() {
    total += titanium;
    $("#total").text(total);
    winOrLose();
});

$("#green").on("click", function() {
    total += green;
    $("#total").text(total);
    winOrLose();
});

$(".playAgain").on("click", function() {
    randomNumbers()
    $(".playButton").remove();
    $("#winner").empty();
    $("#loser").empty();
})