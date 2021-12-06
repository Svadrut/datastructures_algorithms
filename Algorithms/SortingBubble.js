// function bubbleSort(arr) {
//   const swap = (arr, in1, in2) => {
//     [arr[in1], arr[in2]] = [arr[in2], arr[in1]];
//   };
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       //   console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//       //   console.log("ONE PASS COMPLETE!");
//     }
//   }
//   return arr;
// }

// Optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps;
  const swap = (arr, in1, in2) => {
    [arr[in1], arr[in2]] = [arr[in2], arr[in1]];
  };
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      //   console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
      //   console.log("ONE PASS COMPLETE!");
    }
    if (noSwaps) break;
  }
  return arr;
}
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
