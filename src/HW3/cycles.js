export function getSum(a, b) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

export function multiTable(seed) {
  const arr = [];
  for (let i = 1; i <= 9; i++) {
    arr.push(seed * i);
  }
  return arr.join();
}

export function average(N) {
  let sum = 0;
  let count = 0;
  for (let i = 1; i <= N; i += 2) {
    sum += i;
    ++count;
  }
  return sum / count;
}
