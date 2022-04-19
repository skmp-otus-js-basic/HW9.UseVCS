import { circleFit, maxNumber, monthName } from "./condition";

describe("Module hw2 tests", () => {
  it(`Returns max of numbers`, () => {
    expect(maxNumber(2, 3)).toBe(3);
    expect(maxNumber(0, 100)).toBe(100);
  });

  it("The fifth month is May", () => {
    expect(monthName("5")).toBe("Май");
  });

  it("Circle fits into a square", () => {
    const data = [  // Площадь круга Pi*D*D/4
      [78.5, 100, "Площадь круга: 78.5, площадь квадрата 100. Круг поместится в квадрат"],
      [33.1, 25, "Площадь круга: 33.1, площадь квадрата 25. Круг не поместится в квадрат"],
      [33.1, 49, "Площадь круга: 33.1, площадь квадрата 49. Круг поместится в квадрат"]
    ]
    data.forEach(([circle, square, result]) => {
      expect(circleFit(circle, square)).toBe(result);
    });
  });
});
