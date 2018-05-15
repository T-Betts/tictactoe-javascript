describe('GameStatusChecker', function(){
  let victoryGame;

  beforeEach(function(){
    gameStatusChecker = new GameStatusChecker;

    victoryBoard = ['X', 'X', 'X', '-', '-', '-', '-', '-', '-']
  });

  describe('isGameWon', function(){
    it('should return true if game has been won', function(){
      expect(gameStatusChecker.isGameWon(victoryBoard)).toEqual(true)
    });
  });
});
