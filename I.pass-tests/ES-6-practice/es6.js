// Turn this function into an arrow function
const arrow = () => {
  return "es6 is awesome!";
};

//Use the es6 syntax for default parameter
const defaultParameter = (name = "sam") => {
  return name;
};

// Use the spread operator to combine arr1 and arr2
const combineArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

//use destructuring to return the object's cyf property
const destructuring = (obj) => {
  const { cyf } = obj;
  return cyf;
};

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return `The sum is equal to ${a + b}`;
}

module.exports = {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString,
};
