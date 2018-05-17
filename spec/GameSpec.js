describe('Game', function(){

  beforeEach(function(){
    game = new Game
  });

  describe('makeMove', function(){
    it('runs place function for a designated square', function(){
      game.makeMove(4)
      expect(game.board.returnBoard()[4]).toEqual('X')
    });

    it('checks the game status after calling place', function(){
      game.makeMove(4)
      expect(game.board.turnswitcher.getCurrentTurn()).toEqual('O')
    });
  });

  describe('checkStatus', function(){
    it('checks whether game has been won', function(){
      for (var i = 0; i < game.board.returnBoard().length - 2; i++) {
        game.makeMove([i])
      };
      expect(game.checkStatus()).toEqual("Congratulations X, you are the winner!")
    });

    it('switches the turn if the game is not over', function(){
      expect(game.checkStatus()).toEqual("O. It's your move")
    });

    it('checks whether game has been drawn', function(){
      for (var i = 0; i < game.board.returnBoard().length - 3; i++) {
        game.makeMove([i])
      };
      game.board.turnswitcher.switchTurn()
      for (var i = 6; i < 9; i++) {
        game.makeMove([i])
      };
      expect(game.checkStatus()).toEqual('Game is a draw')
    });

    it('should declare a winner if the game has been won', function(){
      for (var i = 0; i < game.board.returnBoard().length - 2; i++) {
        game.makeMove([i])
      };
      expect(game.winner).toEqual('X')
    });
  });
});
