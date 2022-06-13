const { removeVowels } = require("./remove-vowels.js");

describe("given the removeVowels function", () => {
  it("given the input 'samuel' when it calls the function will return 's_m__l'", () => {
    // Arrange
    const input = "samuel";
    const expected = "s_m__l";
    // Act
    const result = removeVowels(input);
    // Assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeVowels();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an empty String when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeVowels("");
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an String when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => removeVowels(null);
    const expectedToThrow2 = () => removeVowels(undefined);
    const expectedToThrow3 = () => removeVowels(10);
    const expectedToThrow4 = () => removeVowels({});
    const expectedToThrow5 = () => removeVowels(false);
    const expectedToThrow6 = () => removeVowels(true);
    const expectedToThrow7 = () => removeVowels([]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
    expect(expectedToThrow7).toThrow("Invalid param");
  });
});
