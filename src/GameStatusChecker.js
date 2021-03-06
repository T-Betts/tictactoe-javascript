function GameStatusChecker(){
  this.winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
}

GameStatusChecker.prototype.isGameWon = function (board) {
  for (var i = 0; i < this.winningLines.length; i++) {
    if (board.showTurn() == board.returnBoard()[this.winningLines[i][0]]
    && board.returnBoard()[this.winningLines[i][0]] == board.returnBoard()[this.winningLines[i][1]]
    && board.returnBoard()[this.winningLines[i][1]] == board.returnBoard()[this.winningLines[i][2]]){
      return true
      break;
    }
      }
    return false
};

GameStatusChecker.prototype.isBoardFull = function (game) {
  arr = []
  for (var i = 0; i < game.returnBoard().length; i++) {
    if (game.returnBoard()[i] == '-'){
      arr.push('-')
    }
  }
  return arr.length == 0
};

GameStatusChecker.prototype.isGameDrawn = function (game) {
  return this.isBoardFull(game) && !this.isGameWon(game)
};
