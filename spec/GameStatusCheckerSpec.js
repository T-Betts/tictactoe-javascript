describe('GameStatusChecker', function(){
  let victoryGame;
  let noVictoryGame;
  let fullBoardGame;

  beforeEach(function(){
    gameStatusChecker = new GameStatusChecker;

    victoryGame = jasmine.createSpyObj('victoryGame',['returnBoard', 'showTurn']);
    victoryGame.showTurn.and.returnValue('X');
    victoryGame.returnBoard.and.returnValue(['X', '-', '-', '-', 'X', '-', '-', '-', 'X'])
    noVictoryGame = jasmine.createSpyObj('noVictoryGame',['returnBoard', 'showTurn']);
    noVictoryGame.showTurn.and.returnValue('X');
    noVictoryGame.returnBoard.and.returnValue(['O', 'X', 'O', '-', 'X', '-', '-', '-', 'X'])
    fullBoardGame = jasmine.createSpyObj('fullBoardGame',['returnBoard', 'showTurn']);
    fullBoardGame.returnBoard.and.returnValue(['O', 'X', 'O', 'X', 'X', 'O', 'O', 'O', 'X'])
    fullBoardGame.showTurn.and.returnValue('X');
  });

  describe('isGameWon', function(){
    it('should return true if game has been won', function(){
      expect(gameStatusChecker.isGameWon(victoryGame)).toEqual(true)
    });

    it('should return false if the game has not been won', function(){
      expect(gameStatusChecker.isGameWon(noVictoryGame)).toEqual(false)
    });
  });

  describe('isBoardFull', function(){
    it('should return true if the board is full', function(){
      expect(gameStatusChecker.isBoardFull(fullBoardGame)).toEqual(true)
    });

    it('should return false if the board is not full', function(){
      expect(gameStatusChecker.isBoardFull(noVictoryGame)).toEqual(false)
    });
  });

  describe('isGameDrawn', function(){
    it('should return true if the game has been drawn', function(){
      expect(gameStatusChecker.isGameDrawn(fullBoardGame)).toEqual(true)
    });
  });
});
