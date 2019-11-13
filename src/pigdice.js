//---Business Logic
export var player1 = new Player;
export var player2 = new Player;

export var throwDice = function() {
  return Math.floor(6*Math.random())+1;
}

export function Player(turn){
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;

}
