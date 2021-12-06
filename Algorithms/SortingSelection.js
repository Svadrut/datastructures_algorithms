function selectionSort(arr) {
  const swap = (arr, in1, in2) => {
    [arr[in1], arr[in2]] = [arr[in2], arr[in1]];
  };
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, lowest, i);
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);
