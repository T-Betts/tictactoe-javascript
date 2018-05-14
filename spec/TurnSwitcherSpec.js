describe('TurnSwitcher', function(){

  beforeEach(function(){
    ts = new TurnSwitcher
  });

  describe('switchTurn', function(){
    it('should switch current turn from "X" to "O"', function(){
      ts.switchTurn()
      expect(ts.getCurrentTurn()).toBe('O')
    });

    it('should switch current turn from "O" to "X"', function(){
      ts.switchTurn()
      ts.switchTurn()
      expect(ts.getCurrentTurn()).toBe('X')
    });

  });

  describe('getCurrentTurn', function(){
    it('should return the current turn', function(){
      expect(ts.getCurrentTurn()).toEqual('X')
    });
  });
});
