const getLargestNumber = (array) => {
  if (isNotValidParam(array)) {
    throw new Error("Invalid param");
  }
  return Math.max(...array);
};

module.exports = {
  getLargestNumber,
};

const isNotArray = (array) => {
  return !Array.isArray(array);
};

const isEmptyArray = (array) => {
  return array.length === 0;
};

const isNotValidValue = (array) => {
  return array.some((e) => e === null || typeof e !== "number");
};

const isNotValidParam = (array) => {
  return isNotArray(array) || isEmptyArray(array) || isNotValidValue(array);
};
