function Game(turn = new TurnSwitcher) {
  this.turn = turn
  this.board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
};

Game.prototype.returnBoard = function () {
  return this.board
};

Game.prototype.showTurn = function () {
  return this.turn
};

Game.prototype.place = function (square, gsc = new GameStatusChecker) {
  if (gsc.isBoardFull(this)){
    throw "Game is over."
  } else if (this.board[square] != "-"){
    throw "Square already taken."
  } else {
      this.board[square] = this.turn.getCurrentTurn()
    }
};
