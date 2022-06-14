const byEven = (number) => {
  return number % 2 === 0;
};
const getEven = (numbers) => {
  if (isNotValidParam(numbers)) {
    throw new Error("Invalid param");
  }
  return numbers.filter(byEven);
};

module.exports = {
  getEven,
};

const isNotValidParam = (numbers) => {
  return (
    isNotArray(numbers) || isEmptyArray(numbers) || isNotValidValue(numbers)
  );
}

const isNotValidValue = (numbers) => {
  return numbers.some((e) => e === null || typeof e !== "number");
}

const isEmptyArray = (numbers) => {
  return numbers.length === 0;
}

const isNotArray = (numbers) => {
  return !Array.isArray(numbers);
}
