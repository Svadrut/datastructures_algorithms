function getNumber(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
  let most = 0;
  for (let i = 0; i < arr.length; i++) {
    most = Math.max(most, digitCount(arr[i]));
  }
  return most;
}
exports.getNumber = getNumber;
exports.digitCount = digitCount;
exports.maxDigits = maxDigits;
