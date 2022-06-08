const { removeMiddle } = require("./remove-middle");
describe("given the removeMiddle function ", () => {
  test('given the words array ["mouse", "giraffe", "queen", "window", "bottle"] when it calls the function will return ["mouse", "giraffe", "window", "bottle"] and ["queen"]', () => {
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];

    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedResult = ["queen"];

    const result = removeMiddle(words);

    expect(result).toEqual(expectedResult);
    expect(words).toEqual(expectedWords);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeMiddle();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeMiddle(null);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than String when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeMiddle([null, undefined, 10]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeMiddle([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
