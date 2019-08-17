var wins = 0
var losses = 0
var tries = 3
var computercount = 0
var playercount = 0

var ballone = 0
var balltwo = 0
var ballthree = 0
var ballfour = 0
var ballfive = 0
var ballsix = 0
var ballseven = 0

var randomComputer = Math.floor(Math.random() * 700 + 120);
var firstball = Math.floor(Math.random() * 10+1);
var twoball = Math.floor(Math.random() * 25);
var threeball = Math.floor(Math.random() * 50);
var fourball = Math.floor(Math.random() * 75);
var fiveball = Math.floor(Math.random() * 100);
var sixball = Math.floor(Math.random() * 125);
var sevenball = Math.floor(Math.random() * 150);



computercount = randomComputer
console.log(computercount);


$(document).ready(function(){
    $(".shenron").hide();
    $(".dbbal").hide();
    $(".cloud").hide();
    $(".cloud1").hide();
    $(".maincount").hide();
    $(".playercount").hide();
    $(".score").hide();
    $(".wishbutton").hide();
    $("#button").click(function() {
        $("#introtext").hide();
        $(".shenron").show();
        $(".dbbal").show();
        $(".cloud").show();
        $(".cloud1").show();
        $(".maincount").show();
        $(".playercount").show();
        $(".maincount").show();
        $(".playercount").show();
        $(".wishbutton").show();
        $(".score").show();        
        $("#wins").text("Wins " + wins);
        $("#losses").text("Losses: " + losses);
        $("#tries").text("Tries: " + tries);
        $("#computergoal").prepend(computercount);
        $("#numbgoal").prepend(playercount);
        });

    $("#firstball1").click(function() {
        ballone = firstball;
        playercount += ballone;
        $("#numbgoal").text(playercount);
        if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 0) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount > playercount && tries === 0) {
            losses++;
            tries = 3
            alert("Game Over. You Lost");
            reset();
        }
    });

    $("#secondball2").click(function() {
        balltwo = twoball;
        playercount += balltwo;
        $("#numbgoal").text(playercount);
        if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 0) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount > playercount && tries === 0) {
            losses++;
            tries = 3
            alert("Game Over. You Lost");
            reset();
        }
    });

    $("#thirdball3").click(function() {
        ballthree = threeball;
        playercount += ballthree;
        $("#numbgoal").text(playercount);
        if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 0) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount > playercount && tries === 0) {
            losses++;
            tries = 3
            alert("Game Over. You Lost");
            $("#tries").text()
            reset();
        }
    });

    $("#fourthball4").click(function() {
        ballfour = fourball;
        playercount += ballfour;
        $("#numbgoal").text(playercount);
        if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 0) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount > playercount && tries === 0) {
            losses++;
            tries = 3
            alert("Game Over. You Lost");
            reset();
        }
    });

    $("#fifthball5").click(function() {
        ballfive = fiveball;
        playercount += ballfive;
        $("#numbgoal").text(playercount);
        if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 0) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        }  else if (computercount > playercount && tries === 0) {
            losses++;
            tries = 3
            alert("Game Over. You Lost");
            reset();
        }
    });

    $("#sixthball6").click(function() {
        ballsix = sixball;
        playercount += ballsix;
        $("#numbgoal").text(playercount);
        if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 0) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount > playercount && tries === 0) {
            losses++;
            tries = 3
            alert("Game Over. You Lost");
            reset();
        }
    });

    $("#seventhball7").click(function() {
        ballseven = sevenball;
        playercount += ballseven;
        $("#numbgoal").text(playercount);
        if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 0) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount > playercount && tries === 0) {
            losses++;
            tries = 3
            alert("Game Over. You Lost");
            reset();
        }
    });

   
    
    function reset() {
        randomComputer = Math.floor(Math.random() * 700 + 120);
        firstball = Math.floor(Math.random() * 10+1);
        twoball = Math.floor(Math.random() * 25);
        threeball = Math.floor(Math.random() * 50);
        fourball = Math.floor(Math.random() * 75);
        fiveball = Math.floor(Math.random() * 100);
        sixball = Math.floor(Math.random() * 125);
        sevenball = Math.floor(Math.random() * 150);
        computercount = randomComputer;
        playercount = 0;
        $("#computergoal").text(computercount);
        $("#numbgoal").text(playercount);
        $("#tries").text("tries: " + tries);
        $("#losses").text("losses: " + losses);
    }
  

});