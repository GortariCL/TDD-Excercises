const removeMiddle = (words) => {
  if (
    !Array.isArray(words) ||
    words.length === 0 ||
    words.some((e) => typeof e !== "string")
  ) {
    throw new Error("Invalid param");
  }
  const middle = words.length / 2;
  const word = words.splice(Math.trunc(middle), 1);
  return word;
};

module.exports = {
  removeMiddle,
};
