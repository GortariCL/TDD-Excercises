const { addOne } = require("./add-one.js");
describe("given the addOne function", () => {
  //it("it will return [32, 58, 13, 6] given the input [31, 57, 12, 5]", () => {});
  it("given the input [31, 57, 12, 5] when it calls the function will return [32, 58, 13, 6] and keep the original array", () => {
    // arrange
    const input = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    const unchanged = [31, 57, 12, 5];
    // act
    const result = addOne(input);
    // assert
    expect(result).toEqual(expected);
    expect(input).toEqual(unchanged);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => addOne();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => addOne(null);
    const expectedToThrow2 = () => addOne(undefined);
    const expectedToThrow3 = () => addOne(10);
    const expectedToThrow4 = () => addOne("");
    const expectedToThrow5 = () => addOne("Hola");
    const expectedToThrow6 = () => addOne({});
    const expectedToThrow7 = () => addOne(false);
    const expectedToThrow8 = () => addOne(true);
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
    const expectedToThrow1 = () => addOne([null, null, null]);
    const expectedToThrow2 = () => addOne([undefined, undefined, undefined]);
    const expectedToThrow3 = () => addOne(["-", "2", "Hola"]);
    const expectedToThrow4 = () => addOne([{}, {}, {}]);
    const expectedToThrow5 = () => addOne([true, true, true]);
    const expectedToThrow6 = () => addOne([false, false, false]);
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
    const expectedToThrow = () => addOne([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
