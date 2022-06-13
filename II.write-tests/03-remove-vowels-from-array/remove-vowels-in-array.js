const { removeVowels } = require("../02-remove-vowels/remove-vowels");

const removeVowelsForWords = (words) => {
  if (isNotValidParam(words)) {
    throw new Error("Invalid param");
  }
  return (result = words.map((word) => {
    return removeVowels(word).replace(/[_AEIOU]/g, "");
  }));
};

module.exports = {
  removeVowelsForWords,
};

const isNotValidValue = (words) => {
  return words.some(
    (e) => e === null || typeof e !== "string" || e.length === 0
  );
};

const isEmptyArray = (words) => {
  return words.length === 0;
};

const isNotArray = (words) => {
  return !Array.isArray(words);
};
const isNotValidParam = (words) => {
  return isNotArray(words) || isEmptyArray(words) || isNotValidValue(words);
}

