const { addAllNumbers } = require("./add-numbers");
describe("given the addAllNumbers function", () => {
  it("given the numbers [9, 23, 10, 3, 8] when the numbers that call the function will return 53", () => {
    // arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    // act
    const result = addAllNumbers(numbers);
    // assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addAllNumbers();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addAllNumbers(null);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than number when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addAllNumbers([null, undefined, 10]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addAllNumbers([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
