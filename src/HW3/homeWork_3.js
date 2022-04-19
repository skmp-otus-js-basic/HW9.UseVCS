import { addTitle, writeResult } from "../index";
import { average, getSum, multiTable } from "./cycle";

export function homeWork_3(num) {
  addTitle(num);

  // 1. Вывести в консоль сумму всех целых чисел от 50 до 100.
  const a = 50;
  const b = 100;
  const sum = getSum(a, b);
  writeResult(`Сумма целых чисел от ${a} до ${b} равна ${sum}`);

  // 2. Вывести в консоль таблицу умножения на 7.
  const seed = 7;
  const str = multiTable(seed);
  writeResult(`Таблица умножения на ${seed}: ${str}`);

  // 3. Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N.
  const N = +prompt("Введите целое число:");
  const x = average(N);
  writeResult(`Среднее арифметическое нечетных чисел от 1 до ${N} равно: ${x}`);
}
