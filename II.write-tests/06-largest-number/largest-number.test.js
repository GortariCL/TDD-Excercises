const { getLargestNumber } = require("./largest-number.js");

describe("given the getLargestNumber function", () => {
  it("given the input [3, 21, 88, 4, 36] when it calls the function will return 88", () => {
    // Arrange
    const input = [3, 21, 88, 4, 36];
    const expected = 88;
    // Act
    const result = getLargestNumber(input);
    // Assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getLargestNumber();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getLargestNumber([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => getLargestNumber(null);
    const expectedToThrow2 = () => getLargestNumber(undefined);
    const expectedToThrow3 = () => getLargestNumber(10);
    const expectedToThrow4 = () => getLargestNumber("");
    const expectedToThrow5 = () => getLargestNumber("Hola");
    const expectedToThrow6 = () => getLargestNumber({});
    const expectedToThrow7 = () => getLargestNumber(false);
    const expectedToThrow8 = () => getLargestNumber(true);
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
    const expectedToThrow1 = () => getLargestNumber([null, null, null]);
    const expectedToThrow2 = () => getLargestNumber([undefined, undefined, undefined]);
    const expectedToThrow3 = () => getLargestNumber(["Hola", "4", "-"]);
    const expectedToThrow4 = () => getLargestNumber([{}, {}, {}]);
    const expectedToThrow5 = () => getLargestNumber([true, true, true]);
    const expectedToThrow6 = () => getLargestNumber([false, false, false]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
  });
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
