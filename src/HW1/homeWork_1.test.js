import * as calc from './calc';

describe("Module hw1 tests", () => {
  it('multiplication 3 and 4 is equal 12', () => {
    expect(calc.multi(3, 4)).toBe(12);
  });

  it('adds 1 and 2 is equal 3', () => {
    expect(calc.sum(1, 2)).toBe(3);
  });

  it('total length of strings "abc" and "de" is 5', () => {
    expect(calc.stringLength("abc", "de")).toBe(5);
  });

  it('sum of digits "37519" is 25', () => {
    expect(calc.sumOfNumbers("37519")).toBe(25);
  });

});
