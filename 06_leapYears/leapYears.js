const leapYears = function (year) {
  const century = year % 100 === 0;
  const leap4 = year % 4 === 0;
  const leap400 = year % 400 === 0;

  if (leap4 && (!century || leap400)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
