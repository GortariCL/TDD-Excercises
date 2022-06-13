const removeMiddle = (words) => {
  if (isNotValidParam(words)) {
    throw new Error("Invalid param");
  }
  const middle = words.length / 2;
  return words.splice(Math.trunc(middle), 1);
};

module.exports = {
  removeMiddle,
};

const isNotAString = (words) => {
  return words.some((e) => typeof e !== "string");
};

const isNotEmptyArray = (words) => {
  return words.length === 0;
};

const isNotAnArray = (words) => {
  return !Array.isArray(words);
};

const isNotValidParam = (words) => {
  return isNotAnArray(words) || isNotEmptyArray(words) || isNotAString(words);
}
