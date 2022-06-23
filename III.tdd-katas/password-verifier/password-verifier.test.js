const { PasswordVerifier } = require("./password-verifier.js");

describe("given the verify function", () => {
  it("given the password 'aEiou12345' when it calls the function will pass all vlidations", () => {
    // arrange
    const password = new PasswordVerifier("aEiou12345");
    // act
    const result = password.verify();
    // assert
    expect(result).toEqual("OK");
  });

  it("given the passwords a null when it calls the function will throw an error", () => {
    // arrange
    const password = new PasswordVerifier(null);
    // act
    const expectedToThrow = () => password.verify();
    // assert
    expect(expectedToThrow).toThrow("Password should be not null");
  });

  it("given the password with less than 8 characters when it calls the function will throw an error", () => {
    // arrange
    const password = new PasswordVerifier("aEiOu12");
    // act
    const expectedToThrow = () => password.verify();
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have more than 8 characters"
    );
  });

  it("given the password with only uppercase letters when it calls the function will throw an error", () => {
    // arrange
    const password = new PasswordVerifier("AEIOU12345");
    // act
    const expectedToThrow = () => password.verify();
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have at least one lowercase letter"
    );
  });

  it("given the password with only lowercase letters when it calls the function will throw an error", () => {
    // arrange
    const password = new PasswordVerifier("aeiou12345");
    // act
    const expectedToThrow = () => password.verify();
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have at least one uppercase letter"
    );
  });

  it("given the password without a number when it calls the function will throw an error", () => {
    // arrange
    const password = new PasswordVerifier("aeiouAEIOU");
    // act
    const expectedToThrow = () => password.verify();
    // assert
    expect(expectedToThrow).toThrow(
      "Your password must have at least one number"
    );
  });

  it("given the password that meets at least 3 validations when it calls the function will be OK", () => {
    // arrange
    const password = new PasswordVerifier("a1");
    // act
    const result = password.verify();
    // assert
    expect(result).toEqual("OK");
  });
});
