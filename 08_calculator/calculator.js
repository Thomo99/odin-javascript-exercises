const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return (a - b);
};

const sum = function(arr = 0) {
	let total = 0;

  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total;
};

const multiply = function(args) {
  return args.reduce((acc, curr) => acc * curr, 1);
};

const power = function() {
	
};

const factorial = function() {
	
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
