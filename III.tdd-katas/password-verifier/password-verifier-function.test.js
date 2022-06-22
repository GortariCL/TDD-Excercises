const { verify } = require("./password-verifier-function.js");

describe("given the verify function", () => {
  it("given the input 'aEiou12345' when it calls the function will pass all vlidations", () => {
    // arrange
    const input = "aEiou12345";
    // act
    const result = verify(input);
    // assert
    expect(result).toEqual("OK");
  });

  it("given the inputs a null when it calls the function will throw an error", () => {
    // arrange
    const input = null;
    // act
    const expectedToThrow = () => verify(input);
    // assert
    expect(expectedToThrow).toThrow("Password should be not null");
  });

  it("given the input with less than 8 characters when it calls the function will throw an error", () => {
    // arrange
    const input = "aEiOu12";
    // act
    const expectedToThrow = () => verify(input);
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have more than 8 characters"
    );
  });

  it("given the input with only uppercase letters when it calls the function will throw an error", () => {
    // arrange
    const input = "AEIOU12345";
    // act
    const expectedToThrow = () => verify(input);
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have at least one lowercase letter"
    );
  });

  it("given the input with only lowercase letters when it calls the function will throw an error", () => {
    // arrange
    const input = "aeiou12345";
    // act
    const expectedToThrow = () => verify(input);
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have at least one uppercase letter"
    );
  });

  it("given the input without a number when it calls the function will throw an error", () => {
    // arrange
    const input = "aeiouAEIOU";
    // act
    const expectedToThrow = () => verify(input);
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have at least one number"
    );
  });

  it("given the input that meets at least 3 validations when it calls the function will be OK", () => {
    // arrange
    const input = "a1";
    // act
    const result = verify(input);
    // assert
    expect(result).toEqual("OK");
  });
});
