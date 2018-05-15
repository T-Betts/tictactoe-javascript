describe('Game', function(){

  let xTurn;
  let oTurn;

  beforeEach(function(){
    newGame = new Game(xTurn);

    xTurn = jasmine.createSpyObj('xTurn',['getCurrentTurn', 'switchTurn']);
    xTurn.getCurrentTurn.and.returnValue('X');
    xTurn.switchTurn.and.returnValue('O')
    oTurn = jasmine.createSpyObj('oTurn',['getCurrentTurn', 'switchTurn']);
    oTurn.getCurrentTurn.and.returnValue('O');
    oTurn.switchTurn.and.returnValue('X')
  });

  describe('showBoard', function(){
    it('shows the current state of the board', function(){
      expect(newGame.returnBoard()).toEqual(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
    });
  });

  describe('returnBoard', function(){
    it('should return board', function(){
      expect(newGame.returnBoard()).toEqual(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
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
      expect(newGame.returnBoard()).toEqual(['-', '-', '-', 'X', '-', '-', '-', '-', '-'])
    });

    it('can place "O" in designated square when currentTurn is "O"', function(){
      oMoveGame = new Game(turn = oTurn);
      oMoveGame.place(5)
      expect(oMoveGame.returnBoard()).toEqual(['-', '-', '-', '-', '-', 'O', '-', '-', '-'])
    });

    it('throws error when trying to place symbol in already occupied square', function(){
      newGame.place(1)
      expect( function(){ newGame.place(1) } ).toThrow("Square already taken.")
    });
  });
});
