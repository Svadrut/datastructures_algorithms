function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) {
    return false;
  }
  let counter1 = {};
  let counter2 = {};
  for (let num in strNum1) {
    console.log(num);
    counter1[strNum1[num]] = (counter1[strNum1[num]] || 0) + 1;
    console.log(counter1);
  }
  for (let num in strNum1) {
    console.log(num);
    counter2[strNum2[num]] = (counter2[strNum2[num]] || 0) + 1;
    console.log(counter2);
  }
  for (let val in counter1) {
    if (counter1[val] !== counter2[val]) {
      return false;
    }
  }
  return true;
}
