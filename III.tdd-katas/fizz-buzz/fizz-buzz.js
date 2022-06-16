const fizzbuzz = (numbers) => {
  if (isNumber(numbers)) {
    throw new Error("Invalid param");
  }
  const fizzBuzzArray = [];
  for (i = 1; i <= numbers; i++) {
    isFizzBuzz(fizzBuzzArray);
  }
  return fizzBuzzArray.toString();
};

module.exports = {
  fizzbuzz,
};

const isFizzBuzz = (fizzBuzzArray) => {
  if (i % 15 === 0) {
    fizzBuzzArray.push("FizzBuzz");
  } else if (i % 3 === 0) {
    fizzBuzzArray.push("Fizz");
  } else if (i % 5 === 0) {
    fizzBuzzArray.push("Buzz");
  } else if (i.toString().includes(3) && i.toString().includes(5)) {
    fizzBuzzArray.push("FizzBuzz");
  } else if (i.toString().includes(3)) {
    fizzBuzzArray.push("Fizz");
  } else if (i.toString().includes(5)) {
    fizzBuzzArray.push("Buzz");
  } else {
    fizzBuzzArray.push(i);
  }
};
const isNumber = (numbers) => {
  return typeof numbers !== "number";
};
