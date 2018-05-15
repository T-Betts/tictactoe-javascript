describe('GameStatusChecker', function(){
  let victoryGame;
  let noVictoryGame;

  beforeEach(function(){
    victoryGSC = new GameStatusChecker(victoryGame)
    noVictoryGSC = new GameStatusChecker(noVictoryGame)

    victoryGame = jasmine.createSpyObj('victoryGame',['showBoard']);
    victoryGame.showBoard.and.returnValue([['X', 'X', 'X'], ['-', '-', '-'], ['-', '-', '-']]);
  });

  describe('isGameWon', function(){
    it('should return true if game has been won', function(){
      expect(victoryGSC.isGameWon()).toEqual(true)
    });
  });
});
