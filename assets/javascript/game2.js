var char1 = false;
var char2 = false;

var goku = {
    healthPoints: 100,
    attackPoints: 2,
};

var cell = {
    healthPoints: 3000,
    attackPoints: 10,
};
$(document).ready(function() {
    $(".button6").hide();
    $(".wish1").hide();
    $(".dragon").hide();
    $(".gokuebsprite").hide();
    $(".powerup1").hide();
    $(".powerup2").hide();
    $(".gokufinish").hide();
    $(".gokublueintro").hide();
    $(".beam").hide()
    $(".button5").hide();
    $(".cellfinish").hide();
    $(".gokussintro").hide();
    $(".cellintro").hide();
    $(".gokustat").hide();
    $(".cellstat").hide();
    $(".left").hide();
    $(".right").hide();
    $(".mainimage").hide();
    $(".opp").hide();
    $(".fight").hide();
    $(".opponentimage").hide();
    $(".charactertitle").hide();
    $(".fighterimage").hide();
    $(".cellsprite").hide();
    $(".question1").hide();
    $(".question").hide();
    $(".gokuss").hide();
    $(".gokublue").hide();
    $(".startfight").hide();
    $("#button").click(function() {
        teleport.play();
        $(".left").show();
        $(".left").animate({left: 0});
        $(".right").show();
        $(".right").animate({right: 0});
        $("#button").hide();
    });
    $(".gamestart").click(function() {
        teleport.play();
        selectfighter.play(); 
        $(".left").hide();
        $(".right").hide();
        $(".mainimage").show();
        $(".opponentimage").show();
        $(".charactertitle").show();
        $(".fighterimage").show();
        $(".opp").show();
        $(".fight").show();
        $(".startfight").show();

    });
    $(".opp2").hover(function() {
        $(".cellsprite").hide();
        $(".question").show();
        $(".opponentimage").css('background', 'black');
    });
    $(".opp3").hover(function() {
        $(".cellsprite").hide();
        $(".question").show();
        $(".opponentimage").css('background', 'black');
    });
    $(".opp1").hover(function() {
        $(".cellsprite").show();
        $(".question").hide();
        $(".opponentimage").css('background-image', 'url("../unit-4-game/assets/images/cellbattle.jpg")');
    });
    $(".opp1").click(function() {
        $(".opp2").hide();
        $(".opp3").hide();
        $(".opp1").hide();
        teleport.play();
        char1 = true;
    });
    $(".fighter1").hover(function() {
        $(".gokuss").show();
        $(".question1").hide();
        $(".fighterimage").css('background-image', 'url("../unit-4-game/assets/images/gokuss.jpg")');
    });
    $(".fighter2").hover(function() {
        $(".gokuss").hide();
        $(".question1").show();
        $(".fighterimage").css('background', 'black');
    });
    $(".fighter3").hover(function() {
        $(".gokuss").hide();
        $(".question1").show();
        $(".fighterimage").css('background', 'black');
    });
    $(".fighter1").click(function() {
        $(".fighter1").hide();
        $(".fighter2").hide();
        $(".fighter3").hide();
        teleport.play();   
        char2 = true; 
    });
    $(".startfight").click(function() {
        if (char1 == true && char2 == true) {
        selectfighter.pause();
        $(".gokustat").show();
        $(".cellstat").show();
        $(".charactertitle").hide();
        $(".startfight").hide();
        teleport.play();
        setTimeout( function() {
            $(".cellintro").show();
            $('#video')[0].play();
            setTimeout( function() {
                $(".cellintro").hide();
                $('#video')[0].load();
            }, 8000);
        }, 1000);
        setTimeout( function() {
            $(".gokussintro").show();
            $('#video1')[0].play();
            setTimeout( function() {
                $(".gokussintro").hide();
                $(".button5").show();
                $('#video1')[0].load();
            }, 8000);
        }, 1000);
        
        } else (
            alert("You need to select two characters before starting")
        )
      });
    $(".button5").click(function() {
        if (cell.healthPoints > 2500) {
            cell.healthPoints -= goku.attackPoints;
            goku.healthPoints -= cell.attackPoints;
            goku.attackPoints += goku.attackPoints;
            $(".gokuhealth").text("Health: " + goku.healthPoints);
            $(".cellhealth").text("Health: " + cell.healthPoints);
            console.log(goku.attackPoints);
            console.log(cell.healthPoints);
        } else if (cell.healthPoints < 2500) {
            alert("Cell: 'Enough! Time to End This'");
            setTimeout( function() {
                $(".cellfinish").show();
                $('#video2')[0].play();
                $(".button5").hide();
                setTimeout( function() {
                    $(".cellfinish").hide();
                    $('#video2')[0].load();
                }, 9500);
            }, 1000);
            setTimeout( function() {
                $(".beam").show();
                $(".laser").animate({width: "100%"}, 'slow');
                $(".laser").animate({opacity: 0}, 'slow');
                goku.healthPoints = 0;
                $(".gokuhealth").text("Health: " + goku.healthPoints);
                $(".gokuss").animate({opacity: 0}, 'slow');
                $(".gokuss").hide();
                $(".gokuss").animate({opacity: 1}, 'slow');
            }, 11000);
            setTimeout( function() {
               alert("Not all is lost");
               $(".dragon").show();
               $(".dragon").animate({opacity: 0.5}, 'slow');
            setTimeout( function() {
                 alert("Shenron: Use the dragonballs to defeat Cell. They are still yours to use.");
               $(".wish1").show();
            }, 1000);
            }, 13000);
        }
    });
    $(".wish1").click(function () {
        alert("Your wish has been granted");
        $(".dragon").animate({opacity: 0}, 'slow');
        setTimeout( function() {
            $(".gokublueintro").show();
            $(".wish1").hide();
            $('#video4')[0].play();
            $(".fighterimage").css('background-image', 'url("../unit-4-game/assets/images/gokueblue.png")');
            $(".gokuebsprite").show()
            goku.healthPoints = 200;
            $(".gokuhealth").text("Health: " + goku.healthPoints);
            setTimeout( function() {
                $(".gokublueintro").hide()
                $(".beam").hide();
                $(".laser").animate({width: "0%"}, 'slow');
                $(".laser").animate({opacity: 1}, 'slow');;
                $(".button6").show();
                $(".powerup1").show();
                $('#video4')[0].load();
                powerup.play();
            }, 10000);
        }, 1000);
    });
    $(".button6").click(function () {
        if (cell.healthPoints > 1500) {
        cell.healthPoints -= goku.attackPoints;
        goku.healthPoints -= cell.attackPoints;
        goku.attackPoints += goku.attackPoints;
        $(".gokuhealth").text("Health: " + goku.healthPoints);
        $(".cellhealth").text("Health: " + cell.healthPoints);
        } else if (cell.healthPoints < 1000) {
            alert("Goku: 'My Turn'");
            setTimeout( function() {
                powerup.pause();
                $(".gokufinish").show();
                $('#video3')[0].play();
                $(".button6").hide();
                setTimeout( function() {
                    $(".gokufinish").hide();
                    $('#video3')[0].load();
                    alert("Congratulations! You Beat Cell");
                    alert("If possible, I will add the rest of the chracters and for multiple battles with one character");
                    reset(); 
                }, 12000);
            }, 1000);
      
        }
    });
function reset() {
        teleport.play();
        selectfighter.play(); 
        $(".button6").hide();
    $(".wish1").hide();
    $(".dragon").hide();
    $(".gokuebsprite").hide();
    $(".powerup1").hide();
    $(".powerup2").hide();
    $(".gokufinish").hide();
    $(".gokublueintro").hide();
    $(".button5").hide();
    $(".cellfinish").hide();
    $(".gokussintro").hide();
    $(".cellintro").hide();
    $(".gokustat").hide();
    $(".cellstat").hide();
    $(".left").hide();
    $(".right").hide();
    $(".charactertitle").hide();
    $(".cellsprite").hide();
    $(".question1").hide();
    $(".question").hide();
    $(".gokuss").hide();
    $(".gokublue").hide();
    $(".left").hide();
    $(".right").hide();
    $(".mainimage").show();
    $(".opponentimage").show();
    $(".charactertitle").show();
    $(".fighterimage").show();
    $(".opp").show();
    $(".fight").show();
    $(".startfight").show();
    goku.healthPoints = 100;
    cell.healthPoints = 3000;
    goku.attackPoints = 2;
    $(".gokuhealth").text("Health: " + goku.healthPoints);
    $(".cellhealth").text("Health: " + cell.healthPoints);
}   

var powerup = new Audio ("../unit-4-game/assets/soundsaiyan.mp3");
var teleport = new Audio ("../unit-4-game/assets/DBZSOUNDEFFECTINSTANTTRANSMISSION.mp3");
var selectfighter = new Audio ("../unit-4-game/assets/fighterselect.mp3");
});
