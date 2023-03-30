const convertToCelsius = function (val1) {
  let cel = (val1 - 32) * (5 / 9);
  return Math.round(cel * 10) / 10;
};

const convertToFahrenheit = function (val2) {
  let fah = val2 * (9 / 5) + 32;
  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
