//---Business Logic
var player1 = new Player;
var player2 = new Player;

var throwDice = function() {
  return Math.floor(6*Math.random())+1;
}

function Player(turn){
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
}
//---Check for 1
Player.prototype.checkOne = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    alert("HAA YOU ROLLED A ONE")
  } else {
    this.tempScore += this.roll;
  }
}

var rollOne = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    alert("you rolled a one")
  } else {
    this.tempScore += this.roll;
  }
}

//---User logic

$(document).ready(function() {

  $("button#playerRoll1").click(function(){
    var roll = throwDice();
    player1.roll = roll;
    if (roll === 1){
      this.tempScore = 0
      alert("You rolled a one!")
      player1.tempScore = 0;
      $("#turnScore1").text(player1.tempScore)
    }else{
    $("#rollOutcome1").text(player1.roll);
    player1.tempScore += roll;
    $("#turnScore1").text(player1.tempScore)
   }
  });

  $("button#playerHold1").click(function(){
    player1.totalScore += player1.tempScore;
    $("#playerScore1").text(player1.totalScore);
    alert("Your turn is over! Player 2's turn!");
    player1.tempScore = 0;
    $("#turnScore1").text(player1.tempScore);
    console.log(player1);
  });
});
