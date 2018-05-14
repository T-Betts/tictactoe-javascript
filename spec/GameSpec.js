describe('Game', function(){

  let xTurn;

  beforeEach(function(){
    newGame = new Game(xTurn);
    xTurn = jasmine.createSpyObj('xTurn',['getCurrentTurn']);
    xTurn.getCurrentTurn.and.returnValue("X");
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
    it('can place symbol of current player in designated square', function(){
      newGame.place(4)
      expect(newGame.showBoard()).toEqual([['-', '-', '-'], ['-', 'X', '-'], ['-', '-', '-']])
    });
  });
});
