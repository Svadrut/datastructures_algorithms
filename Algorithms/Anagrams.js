function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let i in str1) {
    const letter = str1[i];
    counter1[letter] = (counter1[letter] || 0) + 1;
  }
  for (let i in str2) {
    const letter = str2[i];
    counter2[letter] = (counter2[letter] || 0) + 1;
  }
  for (let val in counter1) {
    if (!counter2[val]) {
      return false;
    }
    if (counter1[val] !== counter2[val]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("ffff", "oooo"));
