const convertToOldRoman = (number) => {
  romanNumber = new String();

  while (number > 0) {
    number = lessThanFive(number);
    number = lessThanTen(number);
    number = lessThanFifty(number);
    number = lessThanHundred(number);
    number = lessThanFiveHundred(number);
    number = lessThanThousand(number);
    number = equalOrGreaterThanThousand(number);
  }
  return romanNumber;
};

const convertToNewRoman = (number) => {
  romanNumber = new String();

  while (number > 0) {
    number = lessThanFour(number);
    number = equalToFour(number);
    number = lessThanNine(number);
    number = equalToNine(number);
    number = lessThanForty(number);
    number = lessThanFiftyNewRoman(number);
    number = lessThanNinety(number);
    number = lessThanHundredNewRoman(number);
    number = lessThanFourHundred(number);
    number = lessThanFiveHundredNewRoman(number);
    number = lessThanNineHundred(number);
    number = lessThanThousandNewRoman(number);
    number = equalOrGreaterThanTousandNewRoman(number);
  }
  return romanNumber;
};

// validation functions for convertToOldRoman()
const lessThanFive = (number) => {
  if (number >= 1 && number < 5) {
    romanNumber += "I";
    number -= 1;
  }
  return number;
};

const lessThanTen = (number) => {
  if (number >= 5 && number < 10) {
    romanNumber += "V";
    number -= 5;
  }
  return number;
};

const lessThanFifty = (number) => {
  if (number >= 10 && number < 50) {
    romanNumber += "X";
    number -= 10;
  }
  return number;
};

const equalOrGreaterThanThousand = (number) => {
  if (number >= 1000) {
    romanNumber += "M";
    number -= 1000;
  }
  return number;
};

const lessThanThousand = (number) => {
  if (number >= 500 && number < 1000) {
    romanNumber += "D";
    number -= 500;
  }
  return number;
};

const lessThanFiveHundred = (number) => {
  if (number >= 100 && number < 500) {
    romanNumber += "C";
    number -= 100;
  }
  return number;
};

const lessThanHundred = (number) => {
  if (number >= 50 && number < 100) {
    romanNumber += "L";
    number -= 50;
  }
  return number;
};

// validation functions for convertToNewRoman()
const lessThanFour = (number) => {
  if (number >= 1 && number < 4) {
    romanNumber += "I";
    number -= 1;
  }
  return number;
};

const equalToFour = (number) => {
  if (number === 4) {
    romanNumber += "IV";
    number -= 4;
  }
  return number;
};

const lessThanNine = (number) => {
  if (number >= 5 && number < 9) {
    romanNumber += "V";
    number -= 5;
  }
  return number;
};

const equalToNine = (number) => {
  if (number === 9) {
    romanNumber += "IX";
    number -= 9;
  }
  return number;
};

const lessThanForty = (number) => {
  if (number >= 10 && number < 40) {
    romanNumber += "X";
    number -= 10;
  }
  return number;
};

const lessThanFiftyNewRoman = (number) => {
  if (number >= 40 && number < 50) {
    romanNumber += "XL";
    number -= 40;
  }
  return number;
};

const lessThanNinety = (number) => {
  if (number >= 50 && number < 90) {
    romanNumber += "L";
    number -= 50;
  }
  return number;
};

const lessThanHundredNewRoman = (number) => {
  if (number >= 90 && number < 100) {
    romanNumber += "XC";
    number -= 90;
  }
  return number;
};

const lessThanFourHundred = (number) => {
  if (number >= 100 && number < 400) {
    romanNumber += "C";
    number -= 100;
  }
  return number;
};

const lessThanFiveHundredNewRoman = (number) => {
  if (number >= 400 && number < 500) {
    romanNumber += "CD";
    number -= 400;
  }
  return number;
};

const lessThanNineHundred = (number) => {
  if (number >= 500 && number < 900) {
    romanNumber += "D";
    number -= 500;
  }
  return number;
};

const lessThanThousandNewRoman = (number) => {
  if (number >= 900 && number < 1000) {
    romanNumber += "CM";
    number -= 900;
  }
  return number;
};

const equalOrGreaterThanTousandNewRoman = (number) => {
  if (number >= 1000) {
    romanNumber += "M";
    number -= 1000;
  }
  return number;
};

module.exports = {
  convertToOldRoman,
  convertToNewRoman,
};
