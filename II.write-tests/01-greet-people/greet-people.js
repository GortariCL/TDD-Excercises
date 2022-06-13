const greetPeople = (people) => {
  if (isNotValidParam(people)) {
    throw new Error("Invalid param");
  }
  let greeting = "Hello";

  people.map((person) => (greeting = `${greeting} ${person}`));
  return greeting;
};

module.exports = {
  greetPeople,
};

const isNotArray = (people) => {
  return !Array.isArray(people);
};

const isEmptyArray = (people) => {
  return people.length === 0;
};

const isNotValidValue = (people) => {
  return people.some(
    (e) => e === null || typeof e !== "string" || e.length === 0
  );
};

const isNotValidParam = (people) => {
  return isNotArray(people) || isEmptyArray(people) || isNotValidValue(people);
};
/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
