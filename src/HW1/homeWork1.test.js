import * as calc from "./calc";

describe("Module hw1 tests", () => {
  let originAlert;
  let inOut;
  beforeEach(() => {
    inOut = [];
    originAlert = window.alert;
  });
  afterEach(() => {
    window.alert = originAlert;
  });

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

  it("prompt: корректный ввод трех цифр", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    calc.threeDigitRequest(inOut);
    expect(inOut[1]).toBe(6);
  });

  it("alert: количество символов", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "12");
    window.alert = jest.fn();
    calc.threeDigitRequest(inOut);
    const message = "Количество символов не равно 3!";
    expect(window.alert).toBeCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(message);
    expect(inOut[1]).toBe(message);
  });

  it("alert: не число", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "qqq");
    window.alert = jest.fn();
    calc.threeDigitRequest(inOut);
    const message = "qqq - не число!";
    expect(window.alert).toBeCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(message);
    expect(inOut[1]).toBe(message);
  });

  it("console.log: сумма цифр введенного числа", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "333");
    console.log = jest.fn();
    calc.threeDigitRequest(inOut);
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(9);
    expect(inOut[1]).toBe(9);
  });
});
