const {
    convertToOldRoman,
    convertToNewRoman,
  } = require("./roman-converter-v2.js");
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

    it("given no input when it calls the function it will throw an error", () => {
      // arrange
      const expectedToThrow = () => convertToOldRoman();
      // act and assert
      expect(expectedToThrow).toThrow("Invalid param");
    });
  
    it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
      // arrange
      const expectedToThrow1 = () => convertToOldRoman(null);
      const expectedToThrow2 = () => convertToOldRoman(undefined);
      const expectedToThrow3 = () => convertToOldRoman("");
      const expectedToThrow4 = () => convertToOldRoman("Hola");
      const expectedToThrow5 = () => convertToOldRoman({});
      const expectedToThrow6 = () => convertToOldRoman(false);
      const expectedToThrow7 = () => convertToOldRoman(true);
      // act and assert
      expect(expectedToThrow1).toThrow("Invalid param");
      expect(expectedToThrow2).toThrow("Invalid param");
      expect(expectedToThrow3).toThrow("Invalid param");
      expect(expectedToThrow4).toThrow("Invalid param");
      expect(expectedToThrow5).toThrow("Invalid param");
      expect(expectedToThrow6).toThrow("Invalid param");
      expect(expectedToThrow7).toThrow("Invalid param");
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

    it("given no input when it calls the function it will throw an error", () => {
      // arrange
      const expectedToThrow = () => convertToNewRoman();
      // act and assert
      expect(expectedToThrow).toThrow("Invalid param");
    });
  
    it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
      // arrange
      const expectedToThrow1 = () => convertToNewRoman(null);
      const expectedToThrow2 = () => convertToNewRoman(undefined);
      const expectedToThrow3 = () => convertToNewRoman("");
      const expectedToThrow4 = () => convertToNewRoman("Hola");
      const expectedToThrow5 = () => convertToNewRoman({});
      const expectedToThrow6 = () => convertToNewRoman(false);
      const expectedToThrow7 = () => convertToNewRoman(true);
      // act and assert
      expect(expectedToThrow1).toThrow("Invalid param");
      expect(expectedToThrow2).toThrow("Invalid param");
      expect(expectedToThrow3).toThrow("Invalid param");
      expect(expectedToThrow4).toThrow("Invalid param");
      expect(expectedToThrow5).toThrow("Invalid param");
      expect(expectedToThrow6).toThrow("Invalid param");
      expect(expectedToThrow7).toThrow("Invalid param");
    });
  });