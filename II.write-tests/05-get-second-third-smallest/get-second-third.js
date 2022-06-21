const getSecondThird = (array) => {
  if (isNotValidParam(array)) {
    throw new Error("Invalid param");
  }

  const newArray = array.slice();
  newArray.sort(ascOrder());
  return [newArray[1], newArray[2]];
};

const isNotArray = (array) => {
  return !Array.isArray(array);
};
const isNotValidValue = (array) => {
  return array.some((e) => e === null || typeof e !== "number");
};

const isEmptyArray = (array) => {
  return array.length === 0;
};

const isNotValidParam = (array) => {
  return isNotArray(array) || isEmptyArray(array) || isNotValidValue(array);
};

const ascOrder = () => {
  return (a, b) => {
    return a - b;
  };
};

module.exports = {
  getSecondThird,
};
