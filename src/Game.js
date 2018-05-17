function Game(board = new Board){
  this.board = board
};

Game.prototype.makeMove = function (square) {
  this.board.place(square)
};
