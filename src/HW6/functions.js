export function diff(a, b) {
  let max = a > b ? a : b;
  let min = a < b ? a : b;
  return max - min;
}

export function isWord(str) {
  const arr = str.split(" ");
  if (arr.length <= 1) {
    return true;
  } else {
    return false;
  }
}

export function pow(a, x) {
  let res = 1;
  for (let i = 1; i <= x; i++) {
    res = res * a;
  }
  return res;
}
