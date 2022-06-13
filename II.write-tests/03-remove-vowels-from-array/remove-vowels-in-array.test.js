const { removeVowelsForWords } = require("./remove-vowels-in-array.js");

describe("given the removeVowelsForWords function", () => {
  it("remove vowels from all words in array", () => {
    // Arrange
    const input = ["Irina", "Etza", "Daniel"];
    const expected = ["rn", "tz", "Dnl"];
    // Act
    const result = removeVowelsForWords(input);
    // Assert
    console.log(result);
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeVowelsForWords();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => removeVowelsForWords([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => removeVowelsForWords(null);
    const expectedToThrow2 = () => removeVowelsForWords(undefined);
    const expectedToThrow3 = () => removeVowelsForWords(10);
    const expectedToThrow4 = () => removeVowelsForWords("");
    const expectedToThrow5 = () => removeVowelsForWords("Hola");
    const expectedToThrow6 = () => removeVowelsForWords({});
    const expectedToThrow7 = () => removeVowelsForWords(false);
    const expectedToThrow8 = () => removeVowelsForWords(true);
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
    const expectedToThrow1 = () => removeVowelsForWords([null, null, null]);
    const expectedToThrow2 = () => removeVowelsForWords([undefined, undefined, undefined]);
    const expectedToThrow3 = () => removeVowelsForWords([10, 4, 23]);
    const expectedToThrow4 = () => removeVowelsForWords([{}, {}, {}]);
    const expectedToThrow5 = () => removeVowelsForWords([true, true, true]);
    const expectedToThrow6 = () => removeVowelsForWords([false, false, false]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
  });
});
