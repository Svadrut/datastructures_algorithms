function areThereDuplicates() {
  let counter = {};
  for (val in arguments) {
    counter[arguments[val]] = (counter[arguments[val]] || 0) + 1;
  }
  for (val in counter) {
    if (counter[val] > 1) return false;
  }
  return false;
}
