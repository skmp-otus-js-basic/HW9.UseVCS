import { writeResult } from "../index";
import * as math from "./maths";

export default function homeWork9() {
  // 1. Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным.
  const cathetus1 = 7;
  const cathetus2 = 5;
  const hypotenuse = 10;
  const rect = math.triangle(cathetus1, cathetus2, hypotenuse);
  let x = rect ? "" : "не ";
  writeResult(
    `A=${cathetus1}, B=${cathetus2}, C=${hypotenuse}. Треугольник ${x}прямоугольный`
  );

  // 2. Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.
  const r = +prompt("Радиус");
  const l = math.circumference(r);
  const s = math.circleArea(r);
  writeResult(`Для радиуса ${r} длина окружности ${l}, площадь круга ${s}`);

  // 3. Пользователь вводит числа a, b и c. Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.
  const a = 3;
  const b = 12;
  const c = 7;
  const base = math.quadratic(a, b, c);
  switch (base.length) {
    case 0: {
      x = "нет";
      break;
    }
    case 1: {
      x = base[0].toString;
      break;
    }
    case 2: {
      x = `${base[0]}, ${base[1]}`;
      break;
    }
    default:
      break;
  }

  writeResult(
    `Для коэффициентов ${a}, ${b}, ${c} корни квадратного уравнения: ${x}`
  );
}
