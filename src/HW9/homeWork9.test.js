import * as math from "./maths";

describe("Module hw9 tests", () => {
  it("Является ли треугольник прямоугольным", () => {
    const data = [
      [7, 5, 10, false],
      [3, 3, 4, false],
    ];
    data.forEach(([a, b, c, rect]) => {
      expect(math.triangle(a, b, c)).toBe(rect);
    });
  });

  it("Длина окружности и площадь круга", () => {
    let l;
    let s;
    const data = [7, 3, 8, 4, 8];
    data.forEach((r) => {
      l = 2 * r * 3.14159;
      expect(math.circumference(r)).toBeCloseTo(l);
      s = r * r * 3.14159;
      expect(math.circleArea(r)).toBeCloseTo(s);
    });
  });

  it("Вычисление корней квадратного уравнения", () => {
    const a = 3;
    const b = 12;
    const c = 7;
    const d = b * b - 4 * a * c;
    const base = math.quadratic(a, b, c);
    let amount;
    // Если D < 0, то корней нет
    if (d < 0) amount = 0;
    // Если D > 0, то корней будет два
    if (d > 0) amount = 2;
    // Если D = 0, то есть ровно один корень
    if (d === 0) amount = 1;
    expect(base.length).toBe(amount);
  });
});
