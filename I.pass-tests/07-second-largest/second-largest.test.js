const { secondLargest } = require("./second-largest");

describe("given the secondLargest function", () => {
  it("given the input [2, 0, 23, 0, 57, 1, 230] when it calls the function will return 57", () => {
    // arrange
    const numbers = [2, 0, 23, 0, 57, 1, 230];
    // act
    const output = secondLargest(numbers);
    // assert
    expect(output).toEqual(57);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => secondLargest();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => secondLargest(null);
    const expectedToThrow2 = () => secondLargest(undefined);
    const expectedToThrow3 = () => secondLargest(10);
    const expectedToThrow4 = () => secondLargest("");
    const expectedToThrow5 = () => secondLargest("Hola");
    const expectedToThrow6 = () => secondLargest({});
    const expectedToThrow7 = () => secondLargest(false);
    const expectedToThrow8 = () => secondLargest(true);
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
    const expectedToThrow1 = () => secondLargest([null, null, null]);
    const expectedToThrow2 = () => secondLargest([undefined, undefined, undefined]);
    const expectedToThrow3 = () => secondLargest(["-", "2", "Hola"]);
    const expectedToThrow4 = () => secondLargest([{}, {}, {}]);
    const expectedToThrow5 = () => secondLargest([true, true, true]);
    const expectedToThrow6 = () => secondLargest([false, false, false]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
  });

  it("given the empty array or with one element when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => secondLargest([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
