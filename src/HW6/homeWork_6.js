import { addTitle, writeResult } from "../index";
import { diff, isWord, pow } from "./functions";

export function homeWork_6(num) {
  addTitle(num);

  // 1. Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим.
  const n1 = 70;
  const n2 = 101;
  const d = diff(n1, n2);
  writeResult(`Разница между ${n1} и ${n2} равна ${d}`);

  // 2. Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true,
  // если строка состоит из одного слова и false, если из нескольких.
  const text = "Lorem ipsum";
  const word = isWord(text) ? "" : "не ";
  writeResult(`Строка '${text}' это ${word}слово`);

  // 3. Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.
  const a = 5;
  const x = 3;
  const p = pow(a, x);
  writeResult(`Число ${a} в степени ${x} это ${p}`);
}
