import { arraySum, doubleElement, minMaxElement } from "./arrays";

describe("Module hw5 tests", () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  it("Сумма всех элементов массива", () => {
    expect(arraySum(arr)).toBe(55);
  });

  it("Создать новый массив с удвоением элементов", () => {
    const testArr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    expect(doubleElement(arr, 2)).toBe(testArr.join());
  });

  it("Найти наибольший и наименьший элементы", () => {
    const out = minMaxElement(arr);
    expect(out[0]).toBe(10);
    expect(out[0]).not.toBe(5);
    expect(out[1]).toBe(1);
    expect(out[1]).not.toBe(5);
  });
});
