const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else {
      results.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
};
// console.log(merge([1, 2, 3, 4, 5], [3, 17, 22]));
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};
console.log(mergeSort([1555, 2, 78, 93, 23]));
