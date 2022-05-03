export function multi(a, b) {
  return a * b;
}

export function sum(a, b) {
  return a + b;
}

export function stringLength(a, b) {
  return a.length + b.length;
}

export function threeDigitRequest(inOut) {
  let message;
  inOut[0] = prompt("Введите число из трех цифр:");
  if (inOut[0].length !== 3) {
    message = "Количество символов не равно 3!";
    window.alert(message);
    inOut[1] = message;
    return;
  }
  if (isNaN(Number(inOut[0]))) {
    message = `${inOut[0]} - не число!`;
    window.alert(message);
    inOut[1] = message;
    return;
  }
  inOut[1] = sumOfNumbers(inOut[0]);
  console.log(inOut[1]);
}

export function sumOfNumbers(str) {
  let s = 0;
  const strArr = str.split("");
  strArr.forEach((char) => {
    s += Number(char);
  });
  return s;
}
