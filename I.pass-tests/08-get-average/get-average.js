// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
const average = (numbers) => {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error("Invalid param");
  }
  const newNumbers = numbers.filter((e) => typeof e === "number");
  const average = newNumbers.reduce((acc, cur) => acc + cur);
  return average / newNumbers.length;
};

module.exports = {
  average,
};
