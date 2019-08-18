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


var randomComputer = Math.floor(Math.random() * 10 + 100);
var firstball = Math.floor(Math.random() * 10+1);
var twoball = Math.floor(Math.random() * 10+1);
var threeball = Math.floor(Math.random() * 10+1);
var fourball = Math.floor(Math.random() * 10+1);
var fiveball = Math.floor(Math.random() * 10+1);
var sixball = Math.floor(Math.random() * 10+1);
var sevenball = Math.floor(Math.random() * 10+1);




computercount = randomComputer
console.log(computercount);
console.log(firstball);
console.log(twoball);
console.log(threeball);
console.log(fourball);
console.log(fiveball);
console.log(sixball);
console.log(sevenball);


$(document).ready(function(){
    $(".shenron").hide();
    $(".dbball").hide();
    $(".cloud").hide();
    $(".cloud1").hide();
    $(".maincount").hide();
    $(".playercount").hide();
    $(".score").hide();
    $(".rpggame").hide();
    $(".cell2").hide();
    $(".newgame").hide();
    $("#button").click(function() {
        $("#introtext").hide();
        $(".shenron").show();
        $(".dbball").show();
        $(".cloud").show();
        $(".cloud1").show();
        $(".maincount").show();
        $(".playercount").show();
        $(".maincount").show();
        $(".playercount").show();
        $(".rpggame").show();
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
        $("#numbgoal").text(playercount);
         if (computercount == playercount && wins == 2) {
            wins++;
            tries = 3
            alert("You won three games! Click on Shenron's face to ask your wish!");
            reset();
        } else if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 1) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount < playercount && tries == 1) {
            losses++;
            tries = 3
            alert("You went over the third time. Game Over. You Lost");
            reset();
        }
    });

    $("#secondball2").click(function() {
        balltwo = twoball;
        playercount += balltwo;
        $("#numbgoal").text(playercount);
        $("#numbgoal").text(playercount);
         if (computercount == playercount && wins == 2) {
            wins++;
            tries = 3
            alert("You won three games! Click on Shenron's face to ask your wish!");
            reset();
        } else if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 1) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount < playercount && tries == 1) {
            losses++;
            tries = 3
            alert("You went over the third time. Game Over. You Lost");
            reset();
        }
    });

    $("#thirdball3").click(function() {
        ballthree = threeball;
        playercount += ballthree;
        $("#numbgoal").text(playercount);
        $("#numbgoal").text(playercount);
         if (computercount == playercount && wins == 2) {
            wins++;
            tries = 3
            alert("You won three games! Click on Shenron's face to ask your wish!");
            reset();
        } else if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 1) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount < playercount && tries == 1) {
            losses++;
            tries = 3
            alert("You went over the third time. Game Over. You Lost");
            reset();
        }
    });

    $("#fourthball4").click(function() {
        ballfour = fourball;
        playercount += ballfour;
        $("#numbgoal").text(playercount);
        $("#numbgoal").text(playercount);
         if (computercount == playercount && wins == 2) {
            wins++;
            tries = 3
            alert("You won three games! Click on Shenron's face to ask your wish!");
            reset();
        } else if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 1) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount < playercount && tries == 1) {
            losses++;
            tries = 3
            alert("You went over the third time. Game Over. You Lost");
            reset();
        }
    });

    $("#fifthball5").click(function() {
        ballfive = fiveball;
        playercount += ballfive;
        $("#numbgoal").text(playercount);
        $("#numbgoal").text(playercount);
         if (computercount == playercount && wins == 2) {
            wins++;
            tries = 3
            alert("You won three games! Click on Shenron's face to ask your wish!");
            reset();
        } else if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 1) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount < playercount && tries == 1) {
            losses++;
            tries = 3
            alert("You went over the third time. Game Over. You Lost");
            reset();
        }
    });

    $("#sixthball6").click(function() {
        ballsix = sixball;
        playercount += ballsix;
        $("#numbgoal").text(playercount);
        $("#numbgoal").text(playercount);
         if (computercount == playercount && wins == 2) {
            wins++;
            tries = 3
            alert("You won three games! Click on Shenron's face to ask your wish!");
            reset();
        } else if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 1) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount < playercount && tries == 1) {
            losses++;
            tries = 3
            alert("You went over the third time. Game Over. You Lost");
            reset();
        }
    });

    $("#seventhball7").click(function() {
        ballseven = sevenball;
        playercount += ballseven;
        $("#numbgoal").text(playercount);
         if (computercount == playercount && wins == 2) {
            wins++;
            tries = 3
            alert("You won three games! Click on Shenron's face to ask your wish!");
            reset();
        } else if (computercount == playercount) {
            alert("You won! Keep Going!");
            wins++;
            $("#wins").text("Wins: " + wins);
            reset();
        } else if (computercount < playercount && tries > 1) {
            alert("You went over. Try again!");
            tries--;
            $("#tries").text("Tries: " + tries);
            reset();
        } else if (computercount < playercount && tries == 1) {
            losses++;
            tries = 3
            alert("You went over the third time. Game Over. You Lost");
            reset();
        }
    });
    
    $(".rpggame").click(function() {
        disappear();

        
    })
    
   var teleport = new Audio ("../unit-4-game/assets/DBZSOUNDEFFECTINSTANTTRANSMISSION.mp3");
    
    function reset() {
        randomComputer = Math.floor(Math.random() * 10 + 100);
        firstball = Math.floor(Math.random() * 10+1);
        twoball = Math.floor(Math.random() * 10+1);
        threeball = Math.floor(Math.random() * 10+1);
        fourball = Math.floor(Math.random() * 10+1);
        fiveball = Math.floor(Math.random() * 10+1);
        sixball = Math.floor(Math.random() * 10+1);
        sevenball = Math.floor(Math.random() * 10+1);
        computercount = randomComputer;
        playercount = 0;
        $("#computergoal").text(computercount);
        $("#numbgoal").text(playercount);
        $("#tries").text("tries: " + tries);
        $("#losses").text("losses: " + losses);
    }
    function disappear() {
        $(".cellone").animate({opacity:1}, 'fast');
        $(".cellone").animate({opacity:0}, 'fast');
        teleport.play(); 
        setTimeout( function() {
            $(".celltwo").animate({opacity:1}, "fast");
            $(".celltwo").animate({opacity:0}, "fast");
            teleport.play();
        }, 1000);
        setTimeout( function() {
            $(".cellfinal").animate({opacity:1}, "fast");
            teleport.play();
            $(".dbball").animate({opacity: '0.0'}, 1000, 'linear');
            $(".cellfinal").animate({opacity:0}, "fast");    
        }, 2000);
        setTimeout( function() {
            alert("Oh No! Cell has taken the dragonballs. Chase After Him!");   
        }, 3000);
        setTimeout( function() {
            $(".newgame").show();  
        }, 4000);
       
    }
    
 
   

}); 