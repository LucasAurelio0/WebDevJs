
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

$(".btn").on("click", function () {
    var pickedColor = $(this).attr("id");
    userClickedPattern.push(pickedColor);
})

function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    console.log("#" + randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

function animatePress(params) {
    
}



