const repeatString = function (string, num) {
  let newString = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      newString += string;
    }
  } else if (num < 0) {
    newString = "ERROR";
  } else {
    return (newString = " ");
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
