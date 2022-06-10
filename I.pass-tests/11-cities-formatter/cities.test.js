const { formatCities } = require("./cities");

describe("given the formatCities function", () => {
  it("given the input as an Objects Arrays when it calls the function will return an Array with the message 'city is the capital of country' ", () => {
    const capitals = [
      { city: "Paris", country: "France" },
      { city: "Madrid", country: "Spain" },
      { city: "Rome", country: "Italy" },
    ];

    const transform = ({ city, country }) => {
      return `${city} is the capital of ${country}`;
    };

    const expected = [
      "Paris is the capital of France",
      "Madrid is the capital of Spain",
      "Rome is the capital of Italy",
    ];

    const result = formatCities(capitals, transform);

    expect(result).toEqual(expected);
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => formatCities();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array and a string when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrowArray1 = () => formatCities(undefined, undefined);
    const expectedToThrowArray2 = () => formatCities(null, null);
    const expectedToThrowArray3 = () => formatCities(1, 12);
    const expectedToThrowArray4 = () => formatCities("undefined", "");
    const expectedToThrowArray5 = () => formatCities(true, true);
    const expectedToThrowArray6 = () => formatCities(false, false);
    const expectedToThrowArray7 = () => formatCities([], []);
    const expectedToThrowArray8 = () => formatCities({}, {});
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

  it("given the empty array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => formatCities([]);
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as an array with a data type other than String and a data type other than String as the second parameter when you call the function it will throw an error", () => {
    // arrange
    const expectedToThrowArray1 = () => formatCities([null, null, null], null);
    const expectedToThrowArray2 = () => formatCities([undefined, undefined, undefined], undefined);
    const expectedToThrowArray3 = () => formatCities([23, 23, 23], 23);
    const expectedToThrowArray4 = () => formatCities([true, true, true], true);
    const expectedToThrowArray5 = () => formatCities([false, false, false], false);
    const expectedToThrowArray6 = () => formatCities([[], [], []], []);
    const expectedToThrowArray7 = () => formatCities([{}, {}, {}], {});

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
      { city: null, country: null }
    ];
    const input2 = [
      { city: undefined, country: undefined }
    ];
    const input3 = [
      { city: [], country: [] }
    ];
    const input4 = [
      { city: {}, country: {} }
    ];
    const input5 = [
      { city: 10, country: 10 }
    ];
    const input6 = [
      { city: false, country: false }
    ];
    const input7 = [
      { city: true, country: true }
    ];
    // act
    const expectedToThrow1 = () => formatCities(input1);
    const expectedToThrow2 = () => formatCities(input2);
    const expectedToThrow3 = () => formatCities(input3);
    const expectedToThrow4 = () => formatCities(input4);
    const expectedToThrow5 = () => formatCities(input5);
    const expectedToThrow6 = () => formatCities(input6);
    const expectedToThrow7 = () => formatCities(input7);
    // assert
    expect(expectedToThrow1).toThrow("Invalid param");
    expect(expectedToThrow2).toThrow("Invalid param");
    expect(expectedToThrow3).toThrow("Invalid param");
    expect(expectedToThrow4).toThrow("Invalid param");
    expect(expectedToThrow5).toThrow("Invalid param");
    expect(expectedToThrow6).toThrow("Invalid param");
    expect(expectedToThrow7).toThrow("Invalid param");
  });

  it("given the input as an Objects Array with an empty String as value when it calls the function it will throw an error", () => {
    // arrange
    const input1 = [
      { city: "", country: "" }
    ];
    // act
    const expectedToThrow1 = () => formatCities(input1);
    // assert
    expect(expectedToThrow1).toThrow("Invalid param");
  });
});
