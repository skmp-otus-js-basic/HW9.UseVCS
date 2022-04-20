import { addTitle, writeResult } from "../index";
import { addProperty, deepCopy, destruct } from "./object";

export function homeWork_4(num) {
  addTitle(num);

  const user = { name: "John" };

  // 1. Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.
  const propName = "age";
  const propValue = +prompt(
    `Введите число для записи в свойство ${propName} объекта user:`
  );
  addProperty(user, propName, propValue);
  writeResult(`В объекте user создано свойство ${propName}`);

  // 2. Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.
  const value = "admin";
  const admin = deepCopy(user, value);
  writeResult(`Создана копия user с новым полем role: ${value}: `);

  // 3. Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.
  const arr = destruct(admin);
  const [, name] = arr[0];
  const [, age] = arr[1];
  const [, role] = arr[2];
  writeResult(`name: ${name}, age: ${age}, role: ${role}`);
}
