const { getWordLengths } = require("./get-word-lengths");
describe("given the getWordLengths function", () => {
  it('given the input ["sun", "potato", "roundabout", "pizza"] when the input that call the function will return [3, 6, 10, 5]', () => {
    // arrange
    const input = ["sun", "potato", "roundabout", "pizza"];
    const expected = [3, 6, 10, 5];
    // act
    const result = getWordLengths(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getWordLengths();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getWordLengths(null);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than String when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getWordLengths([null, undefined, 10]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getWordLengths([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});