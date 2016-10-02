describe("MontyHallSimulation", function() {
  var simulationTen;

  beforeEach(function() {
    simulationTen = new MontyHallSimulation(10);
  });

  describe('.pickFirstDoor',function() {
    it("sets the specified door to have isFirstSelection equal true", function() {
      expect(simulationTen.doors[0].isFirstSelection).toEqual(false);
      simulationTen.pickFirstDoor(1);
      expect(simulationTen.doors[0].isFirstSelection).toEqual(true);
    });
  });

  describe('.pickSecondDoor',function() {
    it("sets the specified door to have isFirstSelection equal true", function() {
      expect(simulationTen.doors[0].isSecondSelection).toEqual(false);
      simulationTen.pickSecondDoor(1);
      expect(simulationTen.doors[0].isSecondSelection).toEqual(true);
    });
  });

  describe('.checkResult', function() {

    xit('throws an error if the round is not done', function() {
    });


  });
});
