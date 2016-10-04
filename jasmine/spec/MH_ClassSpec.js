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
      simulationTen.pickFirstDoor(0);
      expect(simulationTen.doors[0].isFirstSelection).toEqual(true);
    });
  });

  describe('.pickSecondDoor',function() {
    it("sets the specified door to have isFirstSelection equal true", function() {
      expect(simulationTen.doors[0].isSecondSelection).toEqual(false);
      simulationTen.pickSecondDoor(0);
      expect(simulationTen.doors[0].isSecondSelection).toEqual(true);
    });
  });

  describe('.checkResult', function() {
    var doorLocation;

    beforeEach(function() {
      doorLocation = 5;
      spyOn(window, 'getRandomInt').and.returnValue(doorLocation);
      simulationTen = new MontyHallSimulation(10);
    });

    it('throws an error if the round is not done', function() {
      expect(function() {simulationTen.checkResult(); }).toThrow(new Error('The round is not finished'));
    });

    it('sets result to equal 1.1 if the user sticks with first pick and gets the car', function() {
      simulationTen.pickFirstDoor(doorLocation);
      simulationTen.pickSecondDoor(doorLocation);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(1.1);
    });

    it('sets result to equal 1.2 if the user sticks with first pick and does not get the car', function() {
      var doorPick = doorLocation + 2;
      simulationTen.pickFirstDoor(doorPick);
      simulationTen.pickSecondDoor(doorPick);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(1.2);
    });

    it('sets result equal to 2.1 if the user changes his/her second pick and gets the car', function () {
      simulationTen.pickFirstDoor(2);
      simulationTen.pickSecondDoor(doorLocation);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(2.1);
    });

    it('sets result equal to 2.2 if the user changes his/her second pick but does not gets the car', function () {
      simulationTen.pickFirstDoor(2);
      simulationTen.pickSecondDoor(8);
      simulationTen.checkResult();
      expect(simulationTen.result).toEqual(2.2);
    });
  });


});
