describe('Board', function(){

  let xTurn;
  let oTurn;

  beforeEach(function(){
    newBoard = new Board(xTurn);

    xTurn = jasmine.createSpyObj('xTurn',['getCurrentTurn', 'switchTurn']);
    xTurn.getCurrentTurn.and.returnValue('X');
    xTurn.switchTurn.and.returnValue('O')
    oTurn = jasmine.createSpyObj('oTurn',['getCurrentTurn', 'switchTurn']);
    oTurn.getCurrentTurn.and.returnValue('O');
    oTurn.switchTurn.and.returnValue('X')
    yTurn = jasmine.createSpyObj('yTurn',['getCurrentTurn']);
    yTurn.getCurrentTurn.and.returnValue('Y');
  });

  describe('returnBoard', function(){
    it('should return board', function(){
      expect(newBoard.returnBoard()).toEqual(['-', '-', '-', '-', '-', '-', '-', '-', '-'])
    });
  });

  describe('showTurn', function(){
    it('shows whose turn it is', function(){
      expect(newBoard.showTurn()).toEqual("X")
    });
  });

  describe('place', function(){
    it('can place "X" in designated square when currentTurn is "X"', function(){
      newBoard.place(3)
      expect(newBoard.returnBoard()).toEqual(['-', '-', '-', 'X', '-', '-', '-', '-', '-'])
    });

    it('can place "O" in designated square when currentTurn is "O"', function(){
      oMoveBoard = new Board(turn = oTurn);
      oMoveBoard.place(5)
      expect(oMoveBoard.returnBoard()).toEqual(['-', '-', '-', '-', '-', 'O', '-', '-', '-'])
    });

    it('throws error when trying to place symbol in already occupied square', function(){
      newBoard.place(1)
      expect( function(){ newBoard.place(1) } ).toThrow("Square already taken.")
    });

    it('throws error when trying to place symbol in already occupied square', function(){
      yBoard = new Board(yTurn)
      for (var i = 0; i < yBoard.board.length; i++) {
        yBoard.place([i])
      };
      expect( function(){ yBoard.place(1) } ).toThrow("Game is over.")
    })
  });
});
