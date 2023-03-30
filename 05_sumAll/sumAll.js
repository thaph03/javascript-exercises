const sumAll = function (min, max) {
  if (min < 0 || max < 0) return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  let minNum = min;
  let maxNum = max;
  if (min > max) {
    minNum = max;
    maxNum = min;
  }
  let sum = 0;

  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
