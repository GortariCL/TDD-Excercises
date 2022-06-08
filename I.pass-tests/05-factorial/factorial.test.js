const { factorial } = require("./factorial");
describe("given the factorial function", () => {
  it("given as a number input when it call the function, it will return the factorial result based on the number of numbers", () => {
    // arrange
    const input1 = 5;
    const expected1 = 120;

    const input2 = 9;
    const expected2 = 362880;

    const input3 = 1;
    const expected3 = 1;

    const input4 = 0;
    const expected4 = 1;

    const input5 = 3;
    const expected5 = 6;
    // act
    const result1 = factorial(input1);
    const result2 = factorial(input2);
    const result3 = factorial(input3);
    const result4 = factorial(input4);
    const result5 = factorial(input5);
    // assert
    expect(result1).toEqual(expected1);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
    expect(result4).toEqual(expected4);
    expect(result5).toEqual(expected5);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => factorial();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than a number when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => factorial({});
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a negative number when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => factorial(-3.6);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
