describe('GameStatusChecker', function(){
  let victoryGame;

  beforeEach(function(){
    gameStatusChecker = new GameStatusChecker;

    victoryGame = jasmine.createSpyObj('victoryGame',['returnBoard', 'showTurn']);
    victoryGame.showTurn.and.returnValue('X');
    victoryGame.returnBoard.and.returnValue(['X', '-', '-', '-', 'X', '-', '-', '-', 'X'])
  });

  describe('isGameWon', function(){
    it('should return true if game has been won', function(){
      expect(gameStatusChecker.isGameWon(victoryGame)).toEqual(true)
    });
  });
});
