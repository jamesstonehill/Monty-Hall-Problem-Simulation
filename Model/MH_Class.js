function MontyHallSimulation(NumberOfDoors) {
  this.NumberOfDoors = NumberOfDoors;
  this.doors = [];
  this.firstPick = null;
  this.secondPick = null;
  this.result = null;

  i = 0;
  while (i < this.NumberOfDoors) {
    this.doors.push(new Door());
    i ++;
  }

  rand = getRandomInt(0, this.NumberOfDoors);
  this.doors[rand].doorContent = "Car";
  this.carLocation = rand;
}

MontyHallSimulation.prototype.pickFirstDoor = function (doorNumber) {
  // doorNumber -= 1; //so that it corresponds to the array index
  this.firstPick = doorNumber;
  this.doors[doorNumber].isFirstSelection = true;
};

MontyHallSimulation.prototype.pickSecondDoor = function (doorNumber) {
  // doorNumber -= 1; //so that it corresponds to the array index
  this.secondPick = doorNumber;
  this.doors[doorNumber].isSecondSelection = true;
};

MontyHallSimulation.prototype.checkResult = function () {
  if (this.firstPick === null || this.secondPick === null) {
    throw (new Error('The round is not finished'));
  }

  if (this.firstPick === this.secondPick)  {
    if (this.doors[this.secondPick].doorContent === "Car") {
      console.log("You stuck with your first pick and got the car.");
      this.result = 1.1;
    } else if (this.doors[this.secondPick].doorContent === "Goat") {
      console.log("You stuck with your first pick but didn't get the car.");
      this.result = 1.2;
    }
  } else if (this.firstPick !== this.secondPick) {
    if (this.doors[this.secondPick].doorContent === "Car") {
      console.log("You changed your second pick and you got the car!");
      this.result = 2.1;
    } else if (this.doors[this.secondPick].doorContent === "Goat") {
      console.log("You changed your second pick but did not get the car!");
      this.result = 2.2;
    }
  }

  return this.result;
};

// Helper method for the random int generation
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
