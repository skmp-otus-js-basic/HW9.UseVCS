import { weekDay, minElapsed, dateCompare } from "./dates";

describe("Module hw8 tests", () => {
  it("Вычисление дня недели из даты формата ДД.ММ.ГГГГ", () => {
    expect(weekDay("23.04.2022")).toEqual("Суббота");
    expect(weekDay("24.04.2022")).toEqual("Воскресенье");
  });

  it("Подсчет минут с начала дня", () => {
    expect(minElapsed()).not.toBe(1);
  });

  it("Сравнение дат", () => {
    const data = [
      ["04.02.1968", "12.11.1971", "12.11.1971"],
      ["23.04.2022", "24.04.2022", "24.04.2022"],
      ["01.09.2021", "01.01.2021", "01.09.2021"],
    ];
    data.forEach(([date1, date2, maxDate]) => {
      expect(dateCompare(date1, date2)).toBe(maxDate);
    });
  });
});
