const { average } = require("./get-average");

describe("given the average function", () => {
  it("given the input [4, '-', 8, 11, 'hello', '57', 0, 2] when it calls the function will return 5", () => {
    // arrange
    const input = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;
    // act
    const result = average(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => average();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => average(null);
    const expectedToThrow2 = () => average(undefined);
    const expectedToThrow3 = () => average(10);
    const expectedToThrow4 = () => average("");
    const expectedToThrow5 = () => average("Hola");
    const expectedToThrow6 = () => average({});
    const expectedToThrow7 = () => average(false);
    const expectedToThrow8 = () => average(true);
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

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => average([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
