const sales = (input) => {
  if (
    !Array.isArray(input) ||
    input.length === 0 ||
    input.some((e) => typeof e !== "object" ||
    input.some(e => typeof e.price !== "number" || 
    typeof e.make !== 'string' || 
    typeof e.model !== 'string' || 
    typeof e.colour !== 'string')
    )
  ) {
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
