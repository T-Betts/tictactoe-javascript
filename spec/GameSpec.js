describe('Game', function(){

  let xTurn;
  let oTurn;

  beforeEach(function(){
    newGame = new Game(xTurn);
    oMoveGame = new Game(oTurn)

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
      expect(newGame.turn).toEqual("X")
    });
  });

  describe('place', function(){
    it('can place "X" in designated square when currentTurn is "X"', function(){
      newGame.place(4)
      expect(newGame.showBoard()).toEqual([['-', '-', '-'], ['-', 'X', '-'], ['-', '-', '-']])
    });
  });

  describe('place', function(){
    it('can place "O" in designated square when currentTurn is "O"', function(){
      oMoveGame.place(4)
      expect(oMoveGame.showBoard()).toEqual([['-', '-', '-'], ['-', 'O', '-'], ['-', '-', '-']])
    });
  });
});
