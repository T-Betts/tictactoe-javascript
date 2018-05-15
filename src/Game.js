function Game(turn = new TurnSwitcher) {
  this.turn = turn
  this.board = ['-', '-', '-', '-', '-', '-', '-', '-', '-']
};

Game.prototype.showBoard = function() {
  var rows = [];
  var array = this.board;
  for (var i = 0; i < array.length; i+=3) {
    rows.push([array[i], array[i + 1], array[i + 2]])
  }
  return rows;
};

Game.prototype.returnBoard = function () {
  return this.board
};

Game.prototype.place = function (square) {
  if (this.board[square] != "-"){
    throw "Square already taken."
  } else {
      this.board[square] = this.turn.getCurrentTurn()
    }
};

Game.prototype.takeSquare = function (square) {
  this.place(square)
  this.turn.switchTurn()
};
