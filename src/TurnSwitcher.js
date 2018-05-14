function TurnSwitcher() {
  this.currentTurn = 'X'
};

TurnSwitcher.prototype.switchTurn = function() {
  this.currentTurn == 'X' ? this.currentTurn = 'O' : this.currentTurn = 'X'
};
