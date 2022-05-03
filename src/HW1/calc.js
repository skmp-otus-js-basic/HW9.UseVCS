export function multi(a, b) {
  return a * b;
}

export function sum(a, b) {
  return a + b;
}

export function stringLength(a, b) {
  return a.length + b.length;
}

export function sumOfNumbers(str) {
  let s = 0;
  const strArr = str.split("");
  strArr.forEach((char) => {
    s += Number(char);
  });
  return s;
}
