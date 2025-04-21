const add = function(num1, num2) {
  return num1+num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, current) => sum + current, 0)
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current, 1)
};

const power = function(num1, num2) {
	return num1 ** num2; 
};

const factorial = function(num) {
	if (num == 0){
    return 1
  }
  else{
    let result = 1;
    for (let i = 1; i<=num; i++){
      result = i*result;
    } return result
  }
};

// честно говоря, я уже устал
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
