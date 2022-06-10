const { addAllNumbers } = require("./add-numbers");
describe("given the addAllNumbers function", () => {
  it("given the numbers [9, 23, 10, 3, 8] when the numbers that call the function will return 53", () => {
    // arrange
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    // act
    const result = addAllNumbers(numbers);
    // assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addAllNumbers();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => addAllNumbers(null);
    const expectedToThrow2 = () => addAllNumbers(undefined);
    const expectedToThrow3 = () => addAllNumbers(10);
    const expectedToThrow4 = () => addAllNumbers("");
    const expectedToThrow5 = () => addAllNumbers("Hola");
    const expectedToThrow6 = () => addAllNumbers({});
    const expectedToThrow7 = () => addAllNumbers(false);
    const expectedToThrow8 = () => addAllNumbers(true);
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

  it("given the input as an array with a data type other than number when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => addAllNumbers([null, null, null]);
    const expectedToThrow2 = () => addAllNumbers([undefined, undefined, undefined]);
    const expectedToThrow3 = () => addAllNumbers(["-", "2", "Hola"]);
    const expectedToThrow4 = () => addAllNumbers([{}, {}, {}]);
    const expectedToThrow5 = () => addAllNumbers([true, true, true]);
    const expectedToThrow6 = () => addAllNumbers([false, false, false]);
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
    const expectedToThrow = () => addAllNumbers([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
