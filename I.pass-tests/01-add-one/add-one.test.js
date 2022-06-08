const { addOne } = require("./add-one.js");
describe("given the addOne function", () => {
  //it("it will return [32, 58, 13, 6] given the input [31, 57, 12, 5]", () => {});

  it("given the input [31, 57, 12, 5] when it calls the function will return [32, 58, 13, 6] and keep the original array", () => {
    // arrange
    const input = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    const unchanged = [31, 57, 12, 5];
    // act
    const result = addOne(input);
    // assert
    expect(result).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addOne();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addOne(null);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than number when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addOne([null, undefined, 10]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addOne([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
