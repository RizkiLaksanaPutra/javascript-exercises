const sumAll = function (firstNumber, secondNumber) {
  if (!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)) return 'ERROR';
  if (firstNumber < 0 || secondNumber < 0) return 'ERROR';
  if (firstNumber > secondNumber) [firstNumber, secondNumber] = [secondNumber, firstNumber]
  let result = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
