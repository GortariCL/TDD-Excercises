const { paintShop } = require("./paint-cars");

describe("given the paintShop function", () => {
  it("given the input as an Objects Arrays when it calls the function will return an Objects Array with colour value 'Pink' on the first object", () => {
    // arrange
    const cars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    const unpaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Red" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];

    const repaintedCars = [
      { make: "Ford", model: "Fiesta", colour: "Pink" },
      { make: "Land Rover", model: "Defender", colour: "Muddy" },
      { make: "Toyota", model: "Prius", colour: "Silver" },
      { make: "Honda", model: "Civic", colour: "Yellow" },
    ];
    // act
    const result = paintShop(cars, "Pink");
    // assert
    expect(result).toEqual(repaintedCars);
    expect(cars).toEqual(unpaintedCars);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => paintShop();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array and a string when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrowArray1 = () => paintShop(undefined, undefined);
    const expectedToThrowArray2 = () => paintShop(null, null);
    const expectedToThrowArray3 = () => paintShop(1, 12);
    const expectedToThrowArray4 = () => paintShop("undefined", "");
    const expectedToThrowArray5 = () => paintShop(true, true);
    const expectedToThrowArray6 = () => paintShop(false, false);
    const expectedToThrowArray7 = () => paintShop([], []);
    const expectedToThrowArray8 = () => paintShop({}, {});
    // act and assert
    expect(expectedToThrowArray1).toThrow("Invalid param");
    expect(expectedToThrowArray2).toThrow("Invalid param");
    expect(expectedToThrowArray3).toThrow("Invalid param");
    expect(expectedToThrowArray4).toThrow("Invalid param");
    expect(expectedToThrowArray5).toThrow("Invalid param");
    expect(expectedToThrowArray6).toThrow("Invalid param");
    expect(expectedToThrowArray7).toThrow("Invalid param");
    expect(expectedToThrowArray8).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than String and a data type other than String as the second parameter when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrowArray1 = () => paintShop([null, null, null], "null");
    const expectedToThrowArray2 = () => paintShop([undefined, undefined, undefined], undefined);
    const expectedToThrowArray3 = () => paintShop([23, 23, 23], 23);
    const expectedToThrowArray4 = () => paintShop([true, true, true], true);
    const expectedToThrowArray5 = () => paintShop([false, false, false], false);
    const expectedToThrowArray6 = () => paintShop([[], [], []], []);
    const expectedToThrowArray7 = () => paintShop([{}, {}, {}], {});
    // act and assert
    expect(expectedToThrowArray1).toThrow("Invalid param");
    expect(expectedToThrowArray2).toThrow("Invalid param");
    expect(expectedToThrowArray3).toThrow("Invalid param");
    expect(expectedToThrowArray4).toThrow("Invalid param");
    expect(expectedToThrowArray5).toThrow("Invalid param");
    expect(expectedToThrowArray6).toThrow("Invalid param");
    expect(expectedToThrowArray7).toThrow("Invalid param");
  });

  it("given the input as an Objects Array with other data type as value when it calls the function it will throw an error", () => {
    // arrange
    const input1 = [
      { make: 10, model: 10, colour: 10, price: 10 },
    ];
    const input2 = [
      { make: null, model: null, colour: null, price: null },
    ];
    const input3 = [
      { make: undefined, model: undefined, colour: undefined, price: undefined },
    ];
    const input4 = [
      { make: {}, model: {}, colour: {}, price: {} },
    ];
    const input5 = [
      { make: [], model: [], colour: [], price: [] },
    ];
    const input6 = [
      { make: false, model: false, colour: false, price: false },
    ];
    const input7 = [
      { make: true, model: true, colour: true, price: true },
    ];
    // act
    const expectedToThrow1 = () => paintShop(input1);
    const expectedToThrow2 = () => paintShop(input2);
    const expectedToThrow3 = () => paintShop(input3);
    const expectedToThrow4 = () => paintShop(input4);
    const expectedToThrow5 = () => paintShop(input5);
    const expectedToThrow6 = () => paintShop(input6);
    const expectedToThrow7 = () => paintShop(input7);
    // assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
    expect(expectedToThrow7).toThrow("Invalid param");
  });

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => paintShop([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });
});
