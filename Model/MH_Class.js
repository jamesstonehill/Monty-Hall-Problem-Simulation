function MontyHallSimulation(NumberOfDoors) {
  this.NumberOfDoors = NumberOfDoors;
  this.doors = [];

  i = 0;
  while (i < this.NumberOfDoors) {
    this.doors.push(new Door());
    i ++;
  }

  rand = getRandomInt(0, this.NumberOfDoors);
  this.doors[rand].DoorContent = "Car";
}

MontyHallSimulation.prototype.pickFirstDoor = function (doorNumber) {
  doorNumber -= 1; //so that it corresponds to the array index

  this.doors[doorNumber].isFirstSelection = true;
};

MontyHallSimulation.prototype.pickSecondDoor = function (doorNumber) {
  doorNumber -= 1; //so that it corresponds to the array index

  this.doors[doorNumber].isSecondSelection = true;
};

// Helper method for the random int generation
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
