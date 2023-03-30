const removeFromArray = function (arr, ...args) {
  let newArr = [];
  arr.forEach((num) => {
    if (!args.includes(num)) {
      newArr.push(num);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
