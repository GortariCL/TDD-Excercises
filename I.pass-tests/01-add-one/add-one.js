const addOne = (numbers) => {
  if (isNotValidParam(numbers)) {
    throw new Error("Invalid param");
  }
  return numbers.map((e) => e + 1);
};

module.exports = {
  addOne,
};

const isNotValidParam = (numbers)  => {
  return (
    isNotAnArray(numbers) || isNotEmptyArray(numbers) || isNotANumber(numbers)
  );
}

const isNotANumber = (numbers) => {
  return numbers.some((e) => typeof e !== "number");
}

const isNotEmptyArray = (numbers) => {
  return numbers.length === 0;
}

const isNotAnArray = (numbers) => {
  return !Array.isArray(numbers);
}
