function Game(board = new Board){
  this.board = board
  this.winner = null
};

Game.prototype.makeMove = function (square) {
  this.board.place(square)
  this.checkStatus()
};

Game.prototype.checkStatus = function (gsc = new GameStatusChecker) {
  if(gsc.isGameWon(this.board)){
    this.winner = this.board.turnswitcher.getCurrentTurn()
    return `Congratulations ${this.board.showTurn()}, you are the winner!`
  } else if (gsc.isGameDrawn(this.board)){
    return "Game is a draw"
  } else {
    this.board.turnswitcher.switchTurn()
    return `${this.board.showTurn()}. It's your move`
  }
};
