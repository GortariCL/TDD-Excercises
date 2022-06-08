const { average } = require("./get-average");

describe("given the average function", () => {
  it("given the input [4, '-', 8, 11, 'hello', '57', 0, 2] when it calls the function will return 5", () => {
    // arrange
    const input = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;
    // act
    const result = average(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => average();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => average(null);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => average([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
