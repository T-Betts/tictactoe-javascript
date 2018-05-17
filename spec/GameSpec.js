describe('Game', function(){

  beforeEach(function(){
    game = new Game
  });

  describe('makeMove', function(){
    it('runs place function for a designated square', function(){
      game.makeMove(4)
      expect(game.board.returnBoard()[4]).toEqual('X')
    });

    it('switches the turn if a symbol was placed', function(){
      game.makeMove(4)
      expect(game.board.turnswitcher.getCurrentTurn()).toEqual('O')
    });
  });
});
