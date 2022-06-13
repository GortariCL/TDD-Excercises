const largerThanTen = (array) => {
  if (isNotValidParam(array)) {
    throw new Error("Invalid param");
  }
  return array.filter((number) => {
    return number > 10;
  });
};

module.exports = {
  largerThanTen,
};
const isNotArray = (array) => {
  return !Array.isArray(array);
};

const isEmptyArray = (array) => {
  return array.length === 0;
};

const isNotValidParam = (array) => {
  return isNotArray(array) || isEmptyArray(array) || isNotValidValue(array);
};

const isNotValidValue = (array) => {
  return array.some((e) => e === null || typeof e !== "number");
};
