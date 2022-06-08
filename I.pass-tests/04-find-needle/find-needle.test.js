const { findTheNeedle } = require("./find-needle");
describe("given the words array when the words that call the function will return index of element", () => {
  it('given the input ["house", "train", "slide", "needle", "book"] when it calls the function will return "needle"', () => {
    // arrange
    const input = ["house", "train", "slide", "needle", "book"];
    const expected = 3;
    // act
    const result = findTheNeedle(input, "needle");
    // assert
    expect(result).toEqual(expected);
  });

  it('given the input ["plant", "shelf", "arrow", "bird"] when it calls the function will return "plant"', () => {
    // arrange
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;
    // act
    const result = findTheNeedle(words, "plant");
    // assert
    expect(result).toEqual(expected);
  });

  it("given the empty array or empty element or both are empty when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrowArray = () => findTheNeedle([], "needle");
    const expectedToThrowElement = () => findTheNeedle(["house", "train", "slide", "needle", "book"], "");
    const expectedToThrowBoth = () => findTheNeedle([], "");
    // act and assert
    expect(expectedToThrowArray).toThrow("Invalid param");
    expect(expectedToThrowElement).toThrow("Invalid param");
    expect(expectedToThrowBoth).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array and a string when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrowArray = () => findTheNeedle(undefined, {});
    // act and assert
    expect(expectedToThrowArray).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than String and a data type other than String as the second parameter when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrowArray = () => findTheNeedle([1, null, undefined], null);
    // act and assert
    expect(expectedToThrowArray).toThrow("Invalid param");
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => findTheNeedle();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
