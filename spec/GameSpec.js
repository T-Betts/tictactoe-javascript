describe('Game', function(){
  describe('showBoard', function(){
    it('shows the current state of the board', function(){
      game = new Game
      expect(game.showBoard()).toEqual([['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']])
    });
  });
});
