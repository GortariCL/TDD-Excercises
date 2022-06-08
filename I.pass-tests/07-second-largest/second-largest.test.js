const { secondLargest } = require("./second-largest");

describe("given the secondLargest function", () => {
  it("given the input [2, 0, 23, 0, 57, 1, 230] when it calls the function will return 57", () => {
    // arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];
    // act
    const output = secondLargest(numbers);
    // assert
    expect(output).toEqual(57);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => secondLargest();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => secondLargest(null);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than number when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => secondLargest([null, undefined, 10]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array or with one element when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => secondLargest([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
