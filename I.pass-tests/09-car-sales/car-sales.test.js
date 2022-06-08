const { sales } = require("./car-sales");

describe("given sales function", () => {
  it("given the input as an Objects Array when it calls the function will return an Object with make value as a key and price value as a value", () => {
    // arrange
    const input = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: 5999 },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: 6500 },
      { make: "Honda", model: "Civic", colour: "Yellow", price: 8000 },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];
    const expected = {
      Ford: 22999,
      Honda: 8000,
      "Land Rover": 21000,
      Toyota: 6500,
    };
    // act
    const result = sales(input);
    // assert
    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => sales();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => sales(null);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an Objects Array with other data type as value when it calls the function it will throw an error", () => {
    // arrange
    const input = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: "Hola" },
      { make: "Land Rover", model: "Defender", colour: "Muddy", price: 12000 },
      { make: "Toyota", model: "Prius", colour: "Silver", price: "6500" },
      { make: "Honda", model: "Civic", colour: "Yellow", price: null },
      { make: "Ford", model: "Fiesta", colour: "Red", price: 15000 },
      { make: "Land Rover", model: "Discovery", colour: "Blue", price: 9000 },
      { make: "Ford", model: "Fiesta", colour: "Green", price: 2000 },
    ];
    const expectedToThrow = () => sales(input);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
