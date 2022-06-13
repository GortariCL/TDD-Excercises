const removeVowels = (word) => {
  if (isNotString(word) || isEmptyString(word)) {
    throw new Error("Invalid param");
  }
  const characters = word.split("");
  const result = [];

  characters.forEach((character) => {
    if (characterType(character)) {
      result.push("_");
    } else {
      result.push(character);
    }
  });
  return result.join("");
};

module.exports = {
  removeVowels,
};

const characterType = (character) => {
  return (
    character === "a" ||
    character === "o" ||
    character === "i" ||
    character === "e" ||
    character === "u"
  );
};

const isNotString = (word) => {
  return typeof word !== "string";
}

const isEmptyString = (word) => {
  return word.length === 0;
}
/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
