const getWordLengths = (someWords) => {
  if (isNotValidParam(someWords)) {
    throw new Error("Invalid param");
  }
  return someWords.map((e) => e.length);
};

module.exports = {
  getWordLengths,
};

const isNotValidParam = (someWords) => {
  return (
    isNotAnArray(someWords) ||
    isNotEmptyArray(someWords) ||
    isNotAString(someWords)
  );
}

const isNotAString = (someWords) => {
  return someWords.some((e) => typeof e !== "string");
}

const isNotEmptyArray = (someWords) => {
  return someWords.length === 0;
}

const isNotAnArray = (someWords) => {
  return !Array.isArray(someWords);
}
