import * as calc from "./calc"
import { addTitle, writeResult } from "../index";

export function homeWork_1(num) {
  addTitle(num);

  // 1.В переменных a и b хранятся числа. Написать программу, которая выводит в консоль произведение и сумму этих чисел.
  const a = 5;
  const b = 17;

  const m = calc.multi(a, b);
  const s = calc.sum(a, b);
  let message = `Произведение чисел ${a} и ${b} равно: ${m}, cумма: ${s}`;
  writeResult(message);

  // 2. В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
  const str1 = "Lorem ipsum";
  const str2 = "dolor sit amet";
  message = `Количество символов в строках '${str1}' и '${str2}' равно: ${calc.stringLength(str1, str2)}`;
  writeResult(message);

  // 3. Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.
  let str;
  while (true) {
    str = prompt('Введите число из трех цифр:');
    if (str.length !== 3) {
      window.alert("Количество символов не равно 3!");
      continue;
    }
    if (isNaN(Number(str))) {
      window.alert(`${str} - не число!`);
      continue;
    }
    break;
  }
  message = `Введено число ${str}. Сумма цифр введенного числа: ${calc.sumOfNumbers(str)}`;
  writeResult(message);
}