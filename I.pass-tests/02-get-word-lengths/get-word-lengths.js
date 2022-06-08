const getWordLengths = (someWords) => {
  if (
    !Array.isArray(someWords) ||
    someWords.length === 0 ||
    someWords.some((e) => typeof e !== "string")
  ) {
    throw new Error("Invalid param");
  }
  return someWords.map((e) => e.length);
};

module.exports = {
  getWordLengths,
};
