describe('Game', function(){
  describe('makeMove', function(){
    it('runs place function for a designated square', function(){
      game = new Game
      game.makeMove(4)
      expect(game.board.returnBoard()[4]).toEqual('X')
    });
  });
});
