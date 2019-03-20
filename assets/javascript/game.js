var blue = 0;
var purple = 0;
var titanium = 0;
var green = 0;
var match = 0;
var total = 0;
var wins = 0;
var losses = 0;
var button = $("<button>");
var crystal = document.getElementById("sound");
var winSound = document.getElementById("winSound");
var loseSound = document.getElementById("loseSound");


const randomNumbers = () => {
    blue = Math.floor(Math.random() * Math.floor(12)) + 1;
    $("#blue").attr("value", blue);
    purple = Math.floor(Math.random() * Math.floor(12)) + 1;
    $("#purple").attr("value", purple);
    titanium = Math.floor(Math.random() * Math.floor(12)) + 1;
    $("#titanium").attr("value", titanium);
    green = Math.floor(Math.random() * Math.floor(12)) + 1;
    $("#green").attr("value", green);
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
        loseSound.play();
    } else if (total === match) {
        button = $("<button>");
        $("#winner").text("You Win!");
        button.text("Play Again?");
        button.attr("class", "btn btn-primary playButton");
        $(".playAgain").append(button);
        wins += 1;
        $("#win").text(wins);
        winSound.play();
    }
}

randomNumbers();

$(".crystal").on("click", function () {
    total += parseInt($(this).attr("value"));
    $("#total").text(total);
    crystal.play();
    winOrLose();
})

$(".playAgain").on("click", function() {
    randomNumbers()
    $(".playButton").remove();
    $("#winner").empty();
    $("#loser").empty();
})