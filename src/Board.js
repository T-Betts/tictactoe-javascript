function Board(turnswitcher = new TurnSwitcher) {
  this.turnswitcher = turnswitcher
  this.board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
};

Board.prototype.returnBoard = function () {
  return this.board
};

Board.prototype.showTurn = function () {
  return this.turnswitcher.getCurrentTurn()
};

Board.prototype.place = function (square, gsc = new GameStatusChecker) {
  if (gsc.isBoardFull(this)){
    throw "Game is over."
  } else if (this.board[square] != "-"){
    throw "Square already taken."
  } else {
      this.board[square] = this.showTurn()
    }
};
