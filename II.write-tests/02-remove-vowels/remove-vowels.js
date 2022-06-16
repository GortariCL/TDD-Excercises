const removeVowels = (word) => {
  if (isNotValidValue(word)) {
    throw new Error("Invalid param");
  }
  const characters = word.split("");
  console.log("desde linea 6 => ", characters);
  const result = [];

  characters.forEach((character) => {
    console.log("desde linea 10 => ",character);
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

const vowelsArray = ["a", "e", "i", "o", "u"];

const characterType = (character) => {
  console.log(character);
  return vowelsArray.some(vowel => vowel === character);
  /* return (
    character === "a" ||
    character === "o" ||
    character === "i" ||
    character === "e" ||
    character === "u"
  ); */
  //return vowelsArray.indexOf(character) >= 0;
};

const isNotString = (word) => {
  return typeof word !== "string";
};

const isEmptyString = (word) => {
  return word.length === 0;
};

const isNotValidValue = (word) => {
  return isNotString(word) || isEmptyString(word);
}

removeVowels("samuel");

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
