const formatCities = (capitals, transform) => {
  if (isValidParam(capitals, transform)) {
    throw new Error("Invalid param");
  }
  return capitals.map((e) => transform(e));
};

module.exports = {
  formatCities,
};

const isValidValues = (capitals) => {
  return capitals.some(
    (e) =>
      e === null ||
      typeof e !== "object" ||
      e.city === null ||
      e.country === null ||
      typeof e.city !== "string" ||
      typeof e.country !== "string" ||
      e.city.length === 0 ||
      e.country.length === 0
  );
};

const isNotEmptyArray = (capitals) => {
  return capitals.length === 0;
};

const isNotAFunction = (transform) => {
  return typeof transform !== "function";
};

const isNotArray = (capitals) => {
  return !Array.isArray(capitals);
};

const isValidParam = (capitals, transform) => {
  return (
    isNotArray(capitals) ||
    isNotAFunction(transform) ||
    isNotEmptyArray(capitals) ||
    isValidValues(capitals)
  );
};
