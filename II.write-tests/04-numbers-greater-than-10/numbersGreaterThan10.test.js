const { largerThanTen } = require("./numbersGreaterThan10.js");

describe("given the largerThanTen function", () => {
  it("given the input [4, 10, 32, 9, 21] when it calls the function will return [32, 21]", () => {
    // arrange
    const input = [4, 10, 32, 9, 21];
    const expected = [32, 21];
    // act
    const result = largerThanTen(input);
    //assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => largerThanTen();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => largerThanTen([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => largerThanTen(null);
    const expectedToThrow2 = () => largerThanTen(undefined);
    const expectedToThrow3 = () => largerThanTen(10);
    const expectedToThrow4 = () => largerThanTen("");
    const expectedToThrow5 = () => largerThanTen("Hola");
    const expectedToThrow6 = () => largerThanTen({});
    const expectedToThrow7 = () => largerThanTen(false);
    const expectedToThrow8 = () => largerThanTen(true);
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
    const expectedToThrow1 = () => largerThanTen([null, null, null]);
    const expectedToThrow2 = () => largerThanTen([undefined, undefined, undefined]);
    const expectedToThrow3 = () => largerThanTen(["Hola", "4", "-"]);
    const expectedToThrow4 = () => largerThanTen([{}, {}, {}]);
    const expectedToThrow5 = () => largerThanTen([true, true, true]);
    const expectedToThrow6 = () => largerThanTen([false, false, false]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
  });
});
