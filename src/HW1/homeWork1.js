import * as calc from "./calc";
import { writeResult } from "../index";

export default function homeWork1() {
  // 1. В переменных a и b хранятся числа. Написать программу, которая выводит в консоль произведение и сумму этих чисел.
  const a = 5;
  const b = 17;

  const m = calc.multi(a, b);
  const s = calc.sum(a, b);
  writeResult(`Произведение чисел ${a} и ${b} равно: ${m}, cумма: ${s}`);

  // 2. В двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках.
  const str1 = "Lorem ipsum";
  const str2 = "dolor sit amet";
  let message = `Количество символов в строках '${str1}' и '${str2}' равно: ${calc.stringLength(
    str1,
    str2
  )}`;
  writeResult(message);

  // 3. Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа.
  const inOut = [];
  calc.threeDigitRequest(inOut);
  message = `Введено число: ${inOut[0]}. Сумма цифр введенного числа: ${inOut[1]}`;
  writeResult(message);
}
