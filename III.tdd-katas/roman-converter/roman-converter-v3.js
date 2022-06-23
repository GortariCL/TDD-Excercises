const convertToOldRoman = (number) => {
  let toRoman = new String(), times = new Number();

  if (isNotValidParams(number)) {
    throw new Error("Invalid param");
  }
  
  const romanObj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  for (let key of Object.keys(romanObj)) {
    // times = Math.floor(number / romanObj[key]);
    // toRoman += key.repeat(times);
    toRoman += key.repeat(Math.floor(number / romanObj[key]));
    number %= romanObj[key];
  }
  return toRoman;
};

const convertToNewRoman = (number) => {
  let toRoman = new String(), times = new Number();

  if (isNotValidParams(number)) {
    throw new Error("Invalid param");
  }

  const romanObj = {
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

  for (let key of Object.keys(romanObj)) {
    //times = Math.floor(number / romanObj[key]);
    //toRoman += key.repeat(times);
    toRoman += key.repeat(Math.floor(number / romanObj[key]));
    number %= romanObj[key];
  }
  return toRoman;
}

// validation functions
const isLessThan0 = (number) => {
  return number <= 0 && number > 4999;
};

const isNotNumber = (number) => {
  return typeof number !== "number";
};

const isNull = (number) => {
  return number === null;
};

const isNotValidParams = (number) => {
  return isNull(number) || isNotNumber(number) || isLessThan0(number);
};

module.exports = {
  convertToOldRoman,
  convertToNewRoman
}