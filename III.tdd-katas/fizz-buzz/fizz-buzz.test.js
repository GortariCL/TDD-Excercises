const { fizzbuzz } = require("./fizz-buzz");

describe("given the fizzbuz function", () =>{
  it("given the input 1 when it calls the function will return '1'", () => {
    const result = fizzbuzz(1);
    expect(result).toEqual("1");
  });
  
  it("given the input 2 when it calls the function will return '1,2'", () => {
    const result = fizzbuzz(2);
    expect(result).toEqual("1,2");
  });

  it("given the input 25 when it calls the function will return '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz,Fizz,Buzz'", () => {
    // arrange
    const input = 25;
    // act
    const result = fizzbuzz(input);
    // assert
    expect(result).toEqual('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz,Fizz,Buzz');
  });

  it("given the input 25 when it calls the function will return '1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,Fizz,Fizz,Fizz,Fizz,Buzz,Fizz,Fizz,Fizz,Fizz,Buzz,41,Fizz,Fizz,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz'", () => {
    // arrange
    const input = 53;
    // act
    const result = fizzbuzz(input);
    // assert
    expect(result).toEqual('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,Fizz,14,FizzBuzz,16,17,Fizz,19,Buzz,Fizz,22,Fizz,Fizz,Buzz,26,Fizz,28,29,FizzBuzz,Fizz,Fizz,Fizz,Fizz,Buzz,Fizz,Fizz,Fizz,Fizz,Buzz,41,Fizz,Fizz,44,FizzBuzz,46,47,Fizz,49,Buzz,Fizz,Buzz,FizzBuzz');
  });

  it("given no input when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow = () => fizzbuzz();
    // act and assert
    expect(expectedToThrow).toThrow("Invalid param");
  });

  it("given the input as a data type other than an array when it calls the function it will throw an error", () => {
    // arrange
    const expectedToThrow1 = () => fizzbuzz(null);
    const expectedToThrow2 = () => fizzbuzz(undefined);
    const expectedToThrow3 = () => fizzbuzz("");
    const expectedToThrow4 = () => fizzbuzz("Hola");
    const expectedToThrow5 = () => fizzbuzz([]);
    const expectedToThrow6 = () => fizzbuzz({});
    const expectedToThrow7 = () => fizzbuzz(false);
    const expectedToThrow8 = () => fizzbuzz(true);
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
});
