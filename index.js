// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function zeroOrLess(num2) {
  return num2 <= 0;
}

console.log(zeroOrLess(6));

// second way

const zeroOrLess1 = (num) => {
  let result;
  if (num === 0 || num < 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

console.log(zeroOrLess1(5));
