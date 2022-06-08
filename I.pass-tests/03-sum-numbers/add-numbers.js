const addAllNumbers = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((e) => typeof e !== "number")
  ) {
    throw new Error("Invalid param");
  }
  return numbers.reduce((acc, cur) => acc + cur);
};

module.exports = {
  addAllNumbers,
};
