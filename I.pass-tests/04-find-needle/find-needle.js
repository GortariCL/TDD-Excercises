const findTheNeedle = (words, element) => {
  if (
    !Array.isArray(words) ||
    typeof element !== "string" ||
    words.length === 0 ||
    element.length === 0 ||
    words.some((e) => typeof e !== "string")
  ) {
    throw new Error("Invalid param");
  }
  return words.indexOf(element);
};

module.exports = {
  findTheNeedle,
};
