// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
const average = (numbers) => {
  if (isNotValidParam(numbers)) {
    throw new Error("Invalid param");
  }
  const newNumbers = numbers.filter(justNumbers);
  return numbersAverage(newNumbers);
};

module.exports = {
  average,
};
const isNotValidParam = (numbers) => {
  return isNotAnArray(numbers) || isNotEmptyArray(numbers);
};

const isNotEmptyArray = (numbers) => {
  return numbers.length === 0;
};

const isNotAnArray = (numbers) => {
  return !Array.isArray(numbers);
};
const addNumbers = (acc, cur) => acc + cur;

const justNumbers = (e) => typeof e === "number";

const numbersAverage = (newNumbers) => {
  return newNumbers.reduce(addNumbers) / newNumbers.length;
};
