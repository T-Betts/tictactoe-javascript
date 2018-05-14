function Game(turn = new TurnSwitcher) {
  this.turn = turn.getCurrentTurn()
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
