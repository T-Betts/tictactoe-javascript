describe('TurnSwitcher', function(){
  describe('switchTurn', function(){
    it('should switch current turn from "X" to "O"', function(){
      ts = new TurnSwitcher
      ts.switchTurn()
      expect(ts.currentTurn).toBe('O')
    });

    it('should switch current turn from "O" to "X"', function(){
      ts = new TurnSwitcher
      ts.switchTurn()
      ts.switchTurn()
      expect(ts.currentTurn).toBe('X')
    });

  });

  describe('getCurrentTurn', function(){
    it('should return the current turn', function(){
      ts = new TurnSwitcher
      expect(ts.getCurrentTurn()).toEqual('X')
    });
  });
});
