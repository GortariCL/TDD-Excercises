const { add } = require("./calculator.js");

describe("given the add function", () => {
  it("given the input as an empty string when it calls the function will return 0", () => {
    // arrange
    const input = "";
    const expected = 0;
    // act
    const result = add(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input '1' when it calls the function will return 1", () => {
    // arrange
    const input = "1";
    const expected = 1;
    // act
    const result = add(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input '1,2' when it calls the function will return 3", () => {
    // arrange
    const input = "1,2";
    const expected = 3;
    // act
    const result = add(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input '1,2,10,20,30' when it calls the function will return 63", () => {
    // arrange
    const input = "1,2,10,20,30";
    const expected = 63;
    // act
    const result = add(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given the input as a negative number or contain negative numbers when it calls the function will throw an exception", () => {
    // arrange
    const input = "1,2,10,20,-30";
    // act
    const result = add(input);
    // assert
    expect(result).toEqual("negatives not allowed: -30");
  });

  it("given the input as a number or contains one equal to or greater than 1000 when it calls the function it will transform that number at 0", () => {
    // arrange
    const input = "1,2,10,20,1000";
    // act
    const result = add(input);
    // assert
    expect(result).toEqual(33);
  });

  it("given the input as a number or contains one equal to or greater than 1000 when it calls the function it will transform that number at 0", () => {
    // arrange
    const input = "1,2,10,20,1000";
    // act
    const result = add(input);
    // assert
    expect(result).toEqual(33);
  });  

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => add();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => add(null);
    const expectedToThrow2 = () => add(undefined);
    const expectedToThrow3 = () => add(10);
    const expectedToThrow4 = () => add([]);
    const expectedToThrow5 = () => add({});
    const expectedToThrow6 = () => add(false);
    const expectedToThrow7 = () => add(true);
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
