var goku = {
    healthPoints: 100,
    attackPoints: 5,
};

var cell = {
    healthPoints: 1000,
    attackPoints: 10,
};
$(document).ready(function() {
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
    });


var teleport = new Audio ("../unit-4-game/assets/DBZSOUNDEFFECTINSTANTTRANSMISSION.mp3");
var selectfighter = new Audio ("../unit-4-game/assets/fighterselect.mp3");
});