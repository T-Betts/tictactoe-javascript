function TurnSwitcher(){
  this.currentTurn = 'X'
};

TurnSwitcher.prototype.switchTurn = function () {
  this.currentTurn = 'O'
};
