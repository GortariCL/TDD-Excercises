const { getSecondThird } = require("./get-second-third.js");

describe("given the getSecondThird function", () => {
    it("given the input [90, 5, 11, 8, 6] when it calls the function will return [6, 8] and keep the original array", () => {
        // Arrange
        const input = [90, 5, 11, 8, 6];
        const expected = [6, 8];
        const unchanged = [90, 5, 11, 8, 6];
        // Act
        const result = getSecondThird(input);
        // Assert
        expect(result).toEqual(expected);
        expect(input).toEqual(unchanged);
    });

    it("given no input when it calls the function it will throw an error", () => {
        // arrange
        const expectedToThrow = () => getSecondThird();
        // act and assert
        expect(expectedToThrow).toThrow("Invalid param");
      });
    
      it("given the empty array when it calls the function it will throw an error", () => {
        // arrange
        const expectedToThrow = () => getSecondThird([]);
        // act and assert
        expect(expectedToThrow).toThrow("Invalid param");
      });
    
      it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
        // arrange
        const expectedToThrow1 = () => getSecondThird(null);
        const expectedToThrow2 = () => getSecondThird(undefined);
        const expectedToThrow3 = () => getSecondThird(10);
        const expectedToThrow4 = () => getSecondThird("");
        const expectedToThrow5 = () => getSecondThird("Hola");
        const expectedToThrow6 = () => getSecondThird({});
        const expectedToThrow7 = () => getSecondThird(false);
        const expectedToThrow8 = () => getSecondThird(true);
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
        const expectedToThrow1 = () => getSecondThird([null, null, null]);
        const expectedToThrow2 = () => getSecondThird([undefined, undefined, undefined]);
        const expectedToThrow3 = () => getSecondThird(["Hola", "4", "-"]);
        const expectedToThrow4 = () => getSecondThird([{}, {}, {}]);
        const expectedToThrow5 = () => getSecondThird([true, true, true]);
        const expectedToThrow6 = () => getSecondThird([false, false, false]);
        // act and assert
        expect(expectedToThrow1).toThrow("Invalid param");
        expect(expectedToThrow2).toThrow("Invalid param");
        expect(expectedToThrow3).toThrow("Invalid param");
        expect(expectedToThrow4).toThrow("Invalid param");
        expect(expectedToThrow5).toThrow("Invalid param");
        expect(expectedToThrow6).toThrow("Invalid param");
      });
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
