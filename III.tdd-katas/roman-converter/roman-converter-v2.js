const convertToOldRoman = (number) => {
  const oldRoman = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  let result = "";

  for (key in oldRoman) {
    result += key.repeat(Math.floor(number / oldRoman[key]));
    number %= oldRoman[key];
  }
  return result;
};

const convertToNewRoman = (number) => {
  const newRoman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (key in newRoman) {
    result += key.repeat(Math.floor(number / newRoman[key]));
    number %= newRoman[key];
  }

  return result;
};

module.exports = {
  convertToOldRoman,
  convertToNewRoman,
};
