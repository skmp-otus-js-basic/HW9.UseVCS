export function arraySum(arr) {
  return arr.reduce((sum, current) => sum + current);
}

export function doubleElement(arr, seed) {
  return arr.map((item) => item * seed).join();
}

export function minMaxElement(arr) {
  let max = arr[0];
  let min = arr[0];
  const result = [];
  arr.forEach((item) => {
    if (item > max) max = item;
    if (item < min) min = item;
  });
  result.push(max);
  result.push(min);
  return result;
}
