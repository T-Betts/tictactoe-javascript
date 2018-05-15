describe('GameStatusChecker', function(){
  let victoryGame;
  let noVictoryGame;

  beforeEach(function(){
    gameStatusChecker = new GameStatusChecker;

    victoryGame = jasmine.createSpyObj('victoryGame',['returnBoard', 'showTurn']);
    victoryGame.showTurn.and.returnValue('X');
    victoryGame.returnBoard.and.returnValue(['X', '-', '-', '-', 'X', '-', '-', '-', 'X'])
    noVictoryGame = jasmine.createSpyObj('noVictoryGame',['returnBoard', 'showTurn']);
    noVictoryGame.showTurn.and.returnValue('X');
    noVictoryGame.returnBoard.and.returnValue(['O', 'X', 'O', '-', 'X', '-', '-', '-', 'X'])
  });

  describe('isGameWon', function(){
    it('should return true if game has been won', function(){
      expect(gameStatusChecker.isGameWon(victoryGame)).toEqual(true)
    });

    it('should return false if the game has not been won', function(){
      expect(gameStatusChecker.isGameWon(noVictoryGame)).toEqual(false)
    });
  });
});
