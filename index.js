// Code your solution here

// return all drivers who match names (not case-sensitive)
function findMatching(drivers, checkName) {
  return drivers.filter((driver) => {
    return driver.toLowerCase() === checkName.toLowerCase();
  });
}

// fuzzy match
function fuzzyMatch(drivers, checkName) {
  return drivers.filter((driver) => {
    return driver.substring(0, checkName.length) === checkName;
  });
}

// name match object
function matchName(drivers, checkName) {
  return drivers.filter((driver) => {
    return driver.name === checkName;
  });
}
