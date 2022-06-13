const secondLargest = (numbers) => {
  if (isNotValidParam(numbers)) {
    throw new Error("Invalid param");
  }
  numbers.sort(sortFromLargest);
  return numbers[1];
};

module.exports = {
  secondLargest,
};

const isNotANumber = (numbers) => {
  return numbers.some((e) => typeof e !== "number");
};

const isSmallerEqualThanOne = (numbers) => {
  return numbers.length <= 1;
};

const isNotAnArray = (numbers) => {
  return !Array.isArray(numbers);
};
const isNotValidParam = (numbers) => {
  return (
    isNotAnArray(numbers) ||
    isSmallerEqualThanOne(numbers) ||
    isNotANumber(numbers)
  );
};
const sortFromLargest = (a, b) => b - a;
