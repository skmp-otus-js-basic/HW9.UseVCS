export function diff(a, b) {
  const max = a > b ? a : b;
  const min = a < b ? a : b;
  return max - min;
}

export function isWord(str) {
  const arr = str.split(" ");
  if (arr.length <= 1) {
    return true;
  }
  return false;
}

export function pow(a, x) {
  let res = 1;
  for (let i = 1; i <= x; i++) {
    res *= a;
  }
  return res;
}
