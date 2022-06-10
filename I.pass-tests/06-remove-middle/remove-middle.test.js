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
    const expectedToThrow1 = () => removeMiddle(null);
    const expectedToThrow2 = () => removeMiddle(undefined);
    const expectedToThrow3 = () => removeMiddle(10);
    const expectedToThrow4 = () => removeMiddle("");
    const expectedToThrow5 = () => removeMiddle("Hola");
    const expectedToThrow6 = () => removeMiddle({});
    const expectedToThrow7 = () => removeMiddle(false);
    const expectedToThrow8 = () => removeMiddle(true);
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
    const expectedToThrow1 = () => removeMiddle([null, null, null]);
    const expectedToThrow2 = () => removeMiddle([undefined, undefined, undefined]);
    const expectedToThrow3 = () => removeMiddle([10, 4, 23]);
    const expectedToThrow4 = () => removeMiddle([{}, {}, {}]);
    const expectedToThrow5 = () => removeMiddle([true, true, true]);
    const expectedToThrow6 = () => removeMiddle([false, false, false]);
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
    const expectedToThrow = () => removeMiddle([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
