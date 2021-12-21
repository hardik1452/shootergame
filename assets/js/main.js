var playeronehealth = 100, playertwohealth = 100, gamestatus = 0, playeronewincount = 0, playertwowincount = 0;

function generateRandomDamage() {
    return Math.floor(Math.random() * 5) + 1;
}
function startgame() {
    gamestatus = 1;
    var shootbuttonone = document.getElementById("shooterone").classList.remove("disabled");
    var shootbuttontwo = document.getElementById("shootertwo").classList.remove("disabled");
}

function ponefire() {
    var playeronedamage = generateRandomDamage();
    playertwohealth = playertwohealth- playeronedamage;
    if (playertwohealth < 0) {
        document.getElementById("playertwohealth").innerHTML = "0";
    } else {
        document.getElementById("playertwohealth").innerHTML = playertwohealth;
    }

    if (playertwohealth == 0 || playertwohealth < 0) {
        playeronewincount++;
        document.getElementById("resultdiv").style.visibility = "visible";
        document.getElementById("result").innerHTML = "Player 1 Wins"
        updateGameScore();
        setTimeout(resetscore, 500);
    }
}
function ptwofire() {
    var playertwodamage = generateRandomDamage();
    playeronehealth = playeronehealth - playertwodamage;
    if (playeronehealth < 0) {
        document.getElementById("playeronehealth").innerHTML = "0";
    } else {
        document.getElementById("playeronehealth").innerHTML = playeronehealth;
    }

    if (playeronehealth == 0 || playeronehealth < 0) {
        playertwowincount++;
        document.getElementById("resultdiv").style.visibility = "visible";
        document.getElementById("result").innerHTML = "Player 2 Wins"
        updateGameScore();
        setTimeout(resetscore, 500);
    }
}
function resetscore(){
    playeronehealth=100;
    playertwohealth=100;
    gamestatus=1;
    document.getElementById("playeronehealth").innerHTML=playeronehealth;
    document.getElementById("playertwohealth").innerHTML=playertwohealth;
    document.getElementById("resultdiv").style.visibility = "hidden";
}
function resetGame(){
    playeronehealth=100;
    playertwohealth=100;
    gamestatus=1;
    playeronewincount=0;
    playertwowincount=0;
    document.getElementById("playeronehealth").innerHTML=playeronehealth;
    document.getElementById("playertwohealth").innerHTML=playertwohealth;
    document.getElementById("playeronescore").innerHTML=playeronewincount;
    document.getElementById("playertwoscore").innerHTML=playertwowincount;
}
function updateGameScore(){
    document.getElementById("playeronescore").innerHTML=playeronewincount;
    document.getElementById("playertwoscore").innerHTML=playertwowincount;
    if(playeronewincount==3){
        document.getElementById("resultdiv").style.visibility="visible";
        document.getElementById("result").innerHTML="Player 1 Wins Tournament!";
    }else if(playertwowincount==3){
        document.getElementById("resultdiv").style.visibility="visible";
        document.getElementById("result").innerHTML="Player 2 Wins Tournament!";
    }
}