const {
  convertToOldRoman,
  convertToNewRoman,
} = require("./roman-converter.js");
//convertToOldRoman() TEST
describe("given the function convertToOldRoman", () => {
  it("given the input 1 when calls the function it will return 'I'", () => {
    // arrange
    const input = 1;
    const expected = "I";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 5 when calls the function it will return 'V'", () => {
    // arrange
    const input = 5;
    const expected = "V";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 10 when calls the function it will return 'X'", () => {
    // arrange
    const input = 10;
    const expected = "X";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 50 when calls the function it will return 'L'", () => {
    // arrange
    const input = 50;
    const expected = "L";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 100 when calls the function it will return 'C'", () => {
    // arrange
    const input = 100;
    const expected = "C";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 500 when calls the function it will return 'D'", () => {
    // arrange
    const input = 500;
    const expected = "D";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 1000 when calls the function it will return 'M'", () => {
    // arrange
    const input = 1000;
    const expected = "M";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 3 when calls the function it will return 'III'", () => {
    // arrange
    const input = 3;
    const expected = "III";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 7 when calls the function it will return 'VII'", () => {
    // arrange
    const input = 7;
    const expected = "VII";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 15 when calls the function it will return 'XV'", () => {
    // arrange
    const input = 15;
    const expected = "XV";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 18 when calls the function it will return 'XVIII'", () => {
    // arrange
    const input = 18;
    const expected = "XVIII";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 22 when calls the function it will return 'XXII'", () => {
    // arrange
    const input = 22;
    const expected = "XXII";
    // act
    const result = convertToOldRoman(input);
    // assert
    expect(result).toEqual(expected);
  });
});

// convertToNewRoman() TEST
describe("given the function convertToNewRoman", () => {
  it("given the input 1 when calls the function it will return 'I'", () => {
    // arrange
    const input = 1;
    const expected = "I";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 5 when calls the function it will return 'V'", () => {
    // arrange
    const input = 5;
    const expected = "V";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 10 when calls the function it will return 'X'", () => {
    // arrange
    const input = 10;
    const expected = "X";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 50 when calls the function it will return 'L'", () => {
    // arrange
    const input = 50;
    const expected = "L";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 100 when calls the function it will return 'C'", () => {
    // arrange
    const input = 100;
    const expected = "C";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 500 when calls the function it will return 'D'", () => {
    // arrange
    const input = 500;
    const expected = "D";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 1000 when calls the function it will return 'M'", () => {
    // arrange
    const input = 1000;
    const expected = "M";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 4 when calls the function it will return 'M'", () => {
    // arrange
    const input = 4;
    const expected = "IV";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 9 when calls the function it will return 'IX'", () => {
    // arrange
    const input = 9;
    const expected = "IX";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 14 when calls the function it will return 'XIV'", () => {
    // arrange
    const input = 14;
    const expected = "XIV";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 44 when calls the function it will return 'XLIV'", () => {
    // arrange
    const input = 44;
    const expected = "XLIV";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 99 when calls the function it will return 'XCIX'", () => {
    // arrange
    const input = 99;
    const expected = "XCIX";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 400 when calls the function it will return 'CD'", () => {
    // arrange
    const input = 400;
    const expected = "CD";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input 944 when calls the function it will return 'CMXLIV'", () => {
    // arrange
    const input = 944;
    const expected = "CMXLIV";
    // act
    const result = convertToNewRoman(input);
    // assert
    expect(result).toEqual(expected);
  });
});
