const { getEven } = require("./get-even-numbers.js");

describe("given the getEven function", () => {
  it("given the input [22, 13, 73, 82, 4] when it calls the function will return [22, 82, 4]", () => {
    // Arrange
    const input = [22, 13, 73, 82, 4];
    const expected = [22, 82, 4];
    // Act
    const result = getEven(input);
    // Assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getEven();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => getEven([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => getEven(null);
    const expectedToThrow2 = () => getEven(undefined);
    const expectedToThrow3 = () => getEven(10);
    const expectedToThrow4 = () => getEven("");
    const expectedToThrow5 = () => getEven("Hola");
    const expectedToThrow6 = () => getEven({});
    const expectedToThrow7 = () => getEven(false);
    const expectedToThrow8 = () => getEven(true);
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
    const expectedToThrow1 = () => getEven([null, null, null]);
    const expectedToThrow2 = () =>
      getEven([undefined, undefined, undefined]);
    const expectedToThrow3 = () => getEven(["Hola", "4", "-"]);
    const expectedToThrow4 = () => getEven([{}, {}, {}]);
    const expectedToThrow5 = () => getEven([true, true, true]);
    const expectedToThrow6 = () => getEven([false, false, false]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
  });
});
