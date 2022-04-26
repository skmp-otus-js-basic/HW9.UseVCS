import { writeResult } from "../index";
import { arraySum, doubleElement, minMaxElement } from "./arrays";

export function homeWork5() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 1. Выведите в консоль сумму всех элементов массива.
  const result = arraySum(arr);
  writeResult(`Сумма элементов массива: ${result}`);

  // 2. Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом.
  const arrStr = doubleElement(arr, 1);
  const newArrStr = doubleElement(arr, 2);
  writeResult(`Старый массив: ${arrStr}, новый массив: ${newArrStr}`);

  // 3. Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.
  const out = minMaxElement(arr);
  writeResult(`Наибольший элемент массива: ${out[0]}, наименьший: ${out[1]}`);
}
