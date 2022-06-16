const { verify } = require("./password-verifier.js");

describe("given the verify function", () => {
    it("given the input 'aEiou12345' when it calls the function will return OK", () => {
        // arrange
        const input = 'aEiou12345';
        // act
        const result = verify(input);
        // assert
        expect(result).toEqual("OK");
    });

    it("given the input 123 when it calls the function will throw an error", () => {
        // arrange
        const expectedToThrow = () => verify(123);
        // act and assert
        expect(expectedToThrow).toThrow("Your password must contain letters and numbers");
    });

    it("given the input 'aEiOu12' when it calls the function will throw an error", () => {
        // arrange
        const expectedToThrow = () => verify("aEiOu12");
        // act and assert
        expect(expectedToThrow).toThrow("Your password must have more than 8 characters");
    });

    it("given the input 'AEIOU12345' when it calls the function will throw an error", () => {
        // arrange
        const expectedToThrow = () => verify("AEIOU12345");
        // act and assert
        expect(expectedToThrow).toThrow("Your password must have at least one lowercase letter");
    });

    it("given the input 'aeiou12345' when it calls the function will throw an error", () => {
        // arrange
        const expectedToThrow = () => verify("aeiou12345");
        // act and assert
        expect(expectedToThrow).toThrow("Your password must have at least one uppercase letter");
    });

    it("given the input 'aeiouAEIOU' when it calls the function will throw an error", () => {
        // arrange
        const expectedToThrow = () => verify("aeiouAEIOU");
        // act and assert
        expect(expectedToThrow).toThrow("Your password must have at least one number");
    });
});