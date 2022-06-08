// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

const factorial = (int) => {
  if (typeof int !== 'number' || int < 0) {
    throw new Error("Invalid param");
  }
  let factorial = 1;
  for (i = 1; i <= int; i++) {
    factorial = factorial * i;
  }
  return factorial;
};

module.exports = {
  factorial,
};
