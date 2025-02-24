const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...args]) {
  let result = 0;
  for (let i of [...args]) {
    result += i;
  }
  return result;
};

const multiply = function([...args]) {
  let result = 1;
  for (let i of [...args]) {
    result *= i;
  }
  return result
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
