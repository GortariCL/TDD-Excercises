const addOne = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    numbers.length === 0 ||
    numbers.some((e) => typeof e !== "number")
  ) {
    throw new Error("Invalid param");
  }
  return numbers.map((e) => e + 1);
};

module.exports = {
  addOne,
};
