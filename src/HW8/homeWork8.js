import { writeResult } from "../index";
import { weekDay, minElapsed, dateCompare } from "./dates";

export default function homeWork8() {
  // 1. Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели по введённой дате.
  const strDate = prompt("ДД.ММ.ГГГГ");
  const wd = weekDay(strDate);
  writeResult(`${strDate} это день недели: ${wd}`);

  // 2. Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.
  const elapsed = minElapsed();
  writeResult(`С начала сегодняшнего дня прошло ${elapsed} минут`);

  // 3. В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ.
  // Написать программу, которая определяет более молодого пользователя.
  const strDate1 = "04.02.1968";
  const strDate2 = "11.12.1971";
  const minDate = dateCompare(strDate1, strDate2);
  writeResult(`Из двух дат ${strDate1} и ${strDate2} наибольшая ${minDate}`);
}
