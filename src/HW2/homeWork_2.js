import { addTitle, writeResult } from "../index";
import { circleFit, maxNumber, monthName } from "./condition";

export function homeWork_2(num) {
  addTitle(num);

  // 1. В переменных a и b хранятся числа. Вывести в консоль наибольшее из них.
  const a = 5;
  const b = 17;
  const max = maxNumber(a, b);
  writeResult(`Наибольшее число из ${a} и ${b} это: ${max}`);

  // 2.Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее
  // этому числу (1 — январь, 2 — февраль и т.д.).
  while (true) {
    const str = prompt("Введите номер месяца от 1 до 12:");
    const month = monthName(str);
    if (!month) continue;
    writeResult(`Месяц номер ${str} это: ${month}`);
    break;
  }

  // 3. В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу,
  // которая определяет, поместится ли круг в квадрат

  // Площадь круга
  const circle = 78.5;
  // Площадь квадрата
  const square = 100;

  const message = circleFit(circle, square);
  writeResult(message);
}
