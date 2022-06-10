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
    const expectedToThrow1 = () => getWordLengths(null);
    const expectedToThrow2 = () => getWordLengths(undefined);
    const expectedToThrow3 = () => getWordLengths(10);
    const expectedToThrow4 = () => getWordLengths("");
    const expectedToThrow5 = () => getWordLengths("Hola");
    const expectedToThrow6 = () => getWordLengths({});
    const expectedToThrow7 = () => getWordLengths(false);
    const expectedToThrow8 = () => getWordLengths(true);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
    expect(expectedToThrow7).toThrow("Invalid param");
    expect(expectedToThrow8).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than String when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => getWordLengths([null, null, null]);
    const expectedToThrow2 = () => getWordLengths([undefined, undefined, undefined]);
    const expectedToThrow3 = () => getWordLengths([10, 4, 23]);
    const expectedToThrow4 = () => getWordLengths([{}, {}, {}]);
    const expectedToThrow5 = () => getWordLengths([true, true, true]);
    const expectedToThrow6 = () => getWordLengths([false, false, false]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getWordLengths([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});