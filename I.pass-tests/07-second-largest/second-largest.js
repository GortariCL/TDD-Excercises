const secondLargest = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    numbers.length <= 1 ||
    numbers.some((e) => typeof e !== "number")
  ) {
    throw new Error("Invalid param");
  }
  numbers.sort((a, b) => b - a);
  return numbers[1];
};

module.exports = {
  secondLargest,
};
