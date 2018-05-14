describe('TurnSwitcher', function(){
  describe('switchTurn', function(){
    it('should switch current turn from "X" to "O"', function(){
      ts = new TurnSwitcher
      expect(ts.switchTurn).toBe('O')
    })
  });
});
