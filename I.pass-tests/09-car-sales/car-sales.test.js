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
    const expectedToThrow1 = () => sales(null);
    const expectedToThrow2 = () => sales(undefined);
    const expectedToThrow3 = () => sales(10);
    const expectedToThrow4 = () => sales("");
    const expectedToThrow5 = () => sales("Hola");
    const expectedToThrow6 = () => sales({});
    const expectedToThrow7 = () => sales(false);
    const expectedToThrow8 = () => sales(true);
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

  it("given the input as an Objects Array with other data type as value when it calls the function it will throw an error", () => {
    // arrange
    const input1 = [
      { make: "Ford", model: "Fiesta", colour: "Red", price: "Hola" },
    ];
    const input2 = [
      { make: 10, model: 10, colour: 10, price: 10 },
    ];
    const input3 = [
      { make: null, model: null, colour: null, price: null },
    ];
    const input4 = [
      { make: undefined, model: undefined, colour: undefined, price: undefined },
    ];
    const input5 = [
      { make: {}, model: {}, colour: {}, price: {} },
    ];
    const input6 = [
      { make: [], model: [], colour: [], price: [] },
    ];
    const input7 = [
      { make: false, model: false, colour: false, price: false },
    ];
    const input8 = [
      { make: true, model: true, colour: true, price: true },
    ];
    // act
    const expectedToThrow1 = () => sales(input1);
    const expectedToThrow2 = () => sales(input2);
    const expectedToThrow3 = () => sales(input3);
    const expectedToThrow4 = () => sales(input4);
    const expectedToThrow5 = () => sales(input5);
    const expectedToThrow6 = () => sales(input6);
    const expectedToThrow7 = () => sales(input7);
    const expectedToThrow8 = () => sales(input8);
    // assert
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
    const expectedToThrow = () => sales([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
