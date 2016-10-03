describe("MontyHallSimulation", function() {
  var simulationTen;

  beforeEach(function() {
    simulationTen = new MontyHallSimulation(10);
  });

  describe('initialsed state', function() {

    it('starts out as having result, firstPick, and secondPick === null', function() {
      expect(simulationTen.firstPick).toEqual(null);
      expect(simulationTen.secondPick).toEqual(null);
      expect(simulationTen.result).toEqual(null);
    });

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
    it('throws an error if the round is not done', function() {
      expect(function() {simulationTen.checkResult(); }).toThrow(new Error('The round is not finished'));
    });

    it('sets result to equal 1.1 if the user sticks with first pick and gets the car', function() {
      var doorLocation = 4;
      spyOn(window, 'getRandomInt').and.returnValue(doorLocation);
      var doorPick = doorLocation;
      simulationTen.pickFirstDoor(doorPick);
      simulationTen.pickSecondDoor(doorPick);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(1.2);
    });

    it('sets result to equal 1.2 if the user sticks with first pick and does not get the car', function() {
      spyOn(window, 'getRandomInt').and.returnValue(8);
      var doorPick = 4;
      simulationTen.pickFirstDoor(doorPick);
      simulationTen.pickSecondDoor(doorPick);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(1.2);
    });

    it('sets result equal to 2.1 if the user changes his/her second pick and gets the car', function () {
      var doorLocation = 4;
      spyOn(window, 'getRandomInt').and.returnValue(4);
      simulationTen.pickFirstDoor(2);
      simulationTen.pickSecondDoor(4);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(2.1);
    });

    it('sets result equal to 2.2 if the user changes his/her second pick but does not gets the car', function () {
      var doorLocation = 4;
      spyOn(window, 'getRandomInt').and.returnValue(doorLocation);
      simulationTen.pickFirstDoor(2);
      simulationTen.pickSecondDoor(8);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(2.2);
    });
  });


});
