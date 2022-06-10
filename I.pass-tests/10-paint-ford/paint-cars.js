const paintShop = (cars, color) => {
  if (isValidParam(cars, color)) {
    throw new Error("Invalid param");
  }
  const newCars = arrayDeepCopy(cars);
  newCars[0].colour = color;
  return newCars;
};

module.exports = {
  paintShop,
};

const arrayDeepCopy = (cars) => {
  return JSON.parse(JSON.stringify(cars));
}

const isValidParam = (cars, color) => {
  return isNotAnArray(cars) || isNotAString(color) || isValidValues(cars);
}

const isValidValues = (cars) => {
  return cars.some(
    (e) =>
      e === null ||
      typeof e !== "object" ||
      typeof e.make !== "string" ||
      typeof e.model !== "string" ||
      typeof e.colour !== "string"
  );
}

const isNotAString = (color) => {
  return typeof color !== "string";
}

const isNotAnArray = (cars) => {
  return !Array.isArray(cars);
}
