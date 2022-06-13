const { greetPeople } = require("./greet-people.js");

describe("given the greetPeopleFunction", () => {
  it("given the input ['Irina', 'Ashleigh', 'Etza'] when it calls the function will return 'Hello Irina Ashleigh Etza'", () => {
    // Arrange
    const input = ["Irina", "Ashleigh", "Etza"];
    const expected = "Hello Irina Ashleigh Etza";
    // Act
    const result = greetPeople(input);
    // Assert
    expect(result).toEqual(expected);
  });
  
  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => greetPeople();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => greetPeople([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => greetPeople(null);
    const expectedToThrow2 = () => greetPeople(undefined);
    const expectedToThrow3 = () => greetPeople(10);
    const expectedToThrow4 = () => greetPeople("");
    const expectedToThrow5 = () => greetPeople("Hola");
    const expectedToThrow6 = () => greetPeople({});
    const expectedToThrow7 = () => greetPeople(false);
    const expectedToThrow8 = () => greetPeople(true);
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

  it("given the input as an array with a data type other than a String when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => greetPeople([null, null, null]);
    const expectedToThrow2 = () => greetPeople([undefined, undefined, undefined]);
    const expectedToThrow3 = () => greetPeople([1, 10, 100]);
    const expectedToThrow4 = () => greetPeople([{}, {}, {}]);
    const expectedToThrow5 = () => greetPeople([true, true, true]);
    const expectedToThrow6 = () => greetPeople([false, false, false]);
    // act and assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
  });
});
