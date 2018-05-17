describe('Game', function(){

  beforeEach(function(){
    game = new Game
  });

  describe('makeMove', function(){
    it('runs place function for a designated square', function(){
      game.makeMove(4)
      expect(game.board.returnBoard()[4]).toEqual('X')
    });

    // it('switches the turn if a symbol was placed', function(){
    //   game.makeMove(4)
    //   expect(game.board.turnswitcher.getCurrentTurn()).toEqual('O')
    // });
  });

  describe('checkStatus', function(){
    it('checks whether game has been won', function(){
      for (var i = 0; i < game.board.returnBoard().length - 2; i++) {
        game.makeMove([i])
      };
      console.log(game.board.returnBoard())
      expect(game.checkStatus()).toEqual("Congratulations X, you are the winner!")
    });

    it('switches the turn if the game is not over', function(){
      expect(game.checkStatus()).toEqual("O. It's your move")
    });
  });
});
