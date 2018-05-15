function GameStatusChecker(){
  this.winningLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
}

GameStatusChecker.prototype.isGameWon = function (game) {
  for (var i = 0; i < this.winningLines.length; i++) {
    if (game.showTurn() == game.returnBoard()[this.winningLines[i][0]]
    && game.returnBoard()[this.winningLines[i][0]] == game.returnBoard()[this.winningLines[i][1]]
    && game.returnBoard()[this.winningLines[i][1]] == game.returnBoard()[this.winningLines[i][2]]){
      return true
      break;
    }
      }
};
