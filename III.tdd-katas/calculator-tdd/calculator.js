const add = (input) => {
  if (isNotAString(input)) {
    throw new Error("Invalid param");
  }
  if (isEmptyString(input)) {
    return 0;
  }
  if (isNegative(input)) {
    return `negatives not allowed: ${splitTransformNegativeNumbers(
      input
    ).toString()}`;
  }
  if (!isNegative(input)) {
    return splitTransformAndAddNumbers(input);
  }
};

module.exports = {
  add,
};

const isNotAString = (input) => {
  return typeof input !== "string";
};

const isEmptyString = (input) => {
  return input === "";
};

const splitTransformAndAddNumbers = (input) => {
  return input
    .split(/[\s;,]/g)
    .map((e) => (parseInt(e) >= 1000 ? (e = 0) : parseInt(e)))
    .reduce((acc, cur) => acc + cur);
};

const splitTransformNegativeNumbers = (input) => {
  return input
    .split(/[\s;,]/g)
    .map((e) => parseInt(e))
    .filter((e) => e < 0);
};

const isNegative = (input) => {
  return input.includes("-");
};
