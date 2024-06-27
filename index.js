// Code your solution in this file!
const returnFirstTwoDrivers = function (scubaDriversArray) {
  const indicesToCopy = [0, 1];
  let firstTwoDriversArray = [];
  return (firstTwoDriversArray = scubaDriversArray
    .map((element, index) => {
      if (indicesToCopy.includes(index)) {
        return element;
      }
      return null;
    })
    .filter((element) => element !== null));
};
const returnLastTwoDrivers = function (scubaDriversArray) {
  const indicesToCopy = [2, 3];
  let lastTwoDriversArray = [];
  return (lastTwoDriversArray = scubaDriversArray
    .map((element, index) => {
      if (indicesToCopy.includes(index)) {
        return element;
      }
      return null;
    })
    .filter((element) => element !== null));
};
const createFareMultiplier = (multiplier) => {
  const fare = (fareAmount) => {
    return fareAmount * multiplier;
  };
  return fare;
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(scubaDriversArray, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(scubaDriversArray);
}

//function calls
returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
createFareMultiplier(4)(15);
fareDoubler(25);
fareTripler(30);
selectDifferentDrivers(
  ["Antonia", "Nuru", "Amari", "Mo"],
  returnFirstTwoDrivers
);
