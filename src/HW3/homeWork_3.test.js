import { getSum, multiTable, average } from "./cycle";

describe("Module hw3 tests", () => {
  it("Сумма целых чисел", () => {
    expect(getSum(10, 11)).toBe(21);
    expect(getSum(5, 7)).toBe(18);
  });

  it("Таблица умножения", () => {
    expect(multiTable(7)).toBe("7,14,21,28,35,42,49,56,63");
    expect(multiTable(5)).toBe("5,10,15,20,25,30,35,40,45");
  });

  it("Среднее арифметическое нечётных чисел", () => {
    expect(average(3)).toBeCloseTo(2);
    expect(average(5)).toBeCloseTo(3);
  });
});
