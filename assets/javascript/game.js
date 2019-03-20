var crystals = [
    {color: "blue", value: 0},
    {color: "purple", value: 0},
    {color: "titanium", value: 0},
    {color: "green", value: 0}
];
var match = 0;
var total = 0;
var wins = 0;
var losses = 0;
var button = $("<button>");
var crystal = document.getElementById("sound");
var winSound = document.getElementById("winSound");
var loseSound = document.getElementById("loseSound");

// Sets values for the number to reach and the value of each crystal
const randomNumbers = () => {
    crystals.forEach((crystal) => {
        crystal.value = Math.floor(Math.random() * Math.floor(12)) + 1;
        $("#" + crystal.color).attr("value", crystal.value);
        console.log(crystal.value);
    })
    match = Math.floor(Math.random() * Math.floor(102)) + 19;
    $("#match").text(match);
    $("#total").css("color", "white");
    total = 0;
    $("#total").text(total);
    console.log(match);
}

// Determines whether the click is a winner or a loser and increments accordingly
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

// Initiates the game for the first number to add to
randomNumbers();

// adds the value of the clicked crystal to the total and executes winOrLose if the click is a winner or a loser
$(".crystal").on("click", function () {
    total += parseInt($(this).attr("value"));
    $("#total").text(total);
    crystal.play();
    winOrLose();
})

// Clicking the playAgain button resets the game so you can play again
$(".playAgain").on("click", function() {
    randomNumbers()
    $(".playButton").remove();
    $("#winner").empty();
    $("#loser").empty();
})