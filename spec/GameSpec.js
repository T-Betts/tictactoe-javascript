describe('Game', function(){

  let xTurn;
  let oTurn;

  beforeEach(function(){
    newGame = new Game(xTurn);

    xTurn = jasmine.createSpyObj('xTurn',['getCurrentTurn']);
    xTurn.getCurrentTurn.and.returnValue("X");
    oTurn = jasmine.createSpyObj('oTurn',['getCurrentTurn']);
    oTurn.getCurrentTurn.and.returnValue("O");
  });

  describe('showBoard', function(){
    it('shows the current state of the board', function(){
      expect(newGame.showBoard()).toEqual([['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']])
    });
  });

  describe('turn', function(){
    it('shows whose turn it is', function(){
      expect(newGame.turn.getCurrentTurn()).toEqual("X")
    });
  });

  describe('place', function(){
    it('can place "X" in designated square when currentTurn is "X"', function(){
      newGame.place(3)
      expect(newGame.showBoard()).toEqual([['-', '-', '-'], ['X', '-', '-'], ['-', '-', '-']])
    });

    it('can place "O" in designated square when currentTurn is "O"', function(){
      oMoveGame = new Game(oTurn);
      oMoveGame.place(5)
      expect(oMoveGame.showBoard()).toEqual([['-', '-', '-'], ['-', '-', 'O'], ['-', '-', '-']])
    });
  });

  describe('takeSquare', function(){
    it('places correct symbol in designated square', function(){
      game = new Game
      game.takeSquare(4)
      expect(game.showBoard()).toEqual([['-', '-', '-'], ['-', 'X', '-'], ['-', '-', '-']])
    });

    it('switches the turn', function(){
      game = new Game
      game.takeSquare(4)
      expect(game.turn.getCurrentTurn()).toEqual("O")
    });
  });
});
