function Game(board = new Board){
  this.board = board
};

Game.prototype.makeMove = function (square) {
  this.board.place(square)
};

Game.prototype.checkStatus = function (gsc = new GameStatusChecker) {
  if(gsc.isGameWon(this.board)){
    return `Congratulations ${this.board.showTurn()}, you are the winner!`
  } else {
    this.board.turnswitcher.switchTurn()
    return `${this.board.showTurn()}. It's your move`
  }
};
