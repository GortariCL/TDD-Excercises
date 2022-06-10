const sales = (input) => {
  if (isNotValidParams(input)) {
    throw new Error("Invalid param");
  }
  const carsMake = input.map((e) => e.make);
  const carsPrice = [];
  const expected = {};
  const newCarsMake = carsMake.filter((e, i) => {
    return carsMake.indexOf(e) === i;
  });
  newCarsMake.sort();

  newCarsMake.forEach((e) => {
    let acum = 0;
    input.forEach((c) => {
      if (c.make === e) {
        acum += c.price;
      }
    });
    carsPrice.push(acum);
  });
  newCarsMake.map((e, i) => (expected[e] = carsPrice[i]));
  return expected;
};

module.exports = {
  sales,
};

const isNotValidParams = (input) => {
  return (
    isNotAnArray(input) || isNotEmptyString(input) || isNotValidValues(input)
  );
}

const isNotValidValues = (input) => {
  return input.some(
    (e) =>
      typeof e !== "object" ||
      typeof e.price !== "number" ||
      typeof e.make !== "string" ||
      typeof e.model !== "string" ||
      typeof e.colour !== "string" ||
      e.make.length === 0 ||
      e.model.length === 0 ||
      e.colour.length === 0
  );
}

const isNotEmptyString = (input) => {
  return input.length === 0;
}

const isNotAnArray = (input) => {
  return !Array.isArray(input);
}
