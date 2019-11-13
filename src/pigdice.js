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

}
