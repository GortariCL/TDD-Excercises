const findTheNeedle = (words, element) => {
  if (isNotValidParam(words, element)) {
    throw new Error("Invalid param");
  }
  return words.indexOf(element);
};

module.exports = {
  findTheNeedle,
};

const isNotValidParam = (words, element) => {
  return (
    isNotAnArray(words) ||
    isNotAStringElement(element) ||
    isNotEmptyArray(words) ||
    isNotEmptyString(element) ||
    isNotAString(words)
  );
};

const isNotAString = (words) => {
  return words.some((e) => typeof e !== "string");
};

const isNotEmptyString = (element) => {
  return element.length === 0;
};

const isNotEmptyArray = (words) => {
  return words.length === 0;
};

const isNotAStringElement = (element) => {
  return typeof element !== "string";
};

const isNotAnArray = (words) => {
  return !Array.isArray(words);
};
