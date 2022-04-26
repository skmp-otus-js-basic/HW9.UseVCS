import * as calc from "./calc";

describe("Module hw1 tests", () => {
  it("Произведение чисел 3 и 4 это 12", () => {
    expect(calc.multi(3, 4)).toBe(12);
  });

  it("Сумма чисел 1 и 2 это 3", () => {
    expect(calc.sum(1, 2)).toBe(3);
  });

  it('Общая длина строк "abc" and "de" равна 5', () => {
    expect(calc.stringLength("abc", "de")).toBe(5);
  });

  it('Сумма чисел строки "37519" равна 25', () => {
    expect(calc.sumOfNumbers("37519")).toBe(25);
  });
});
