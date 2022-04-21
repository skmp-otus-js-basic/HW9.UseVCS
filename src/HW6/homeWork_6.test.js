import { diff, isWord, pow } from "./functions";

describe("Module hw6 tests", () => {
  it("Разница между наибольшим и наименьшим", () => {
    expect(diff(1, -1)).toBe(2);
    expect(diff(20, 120)).toBe(100);
    expect(diff(-2, -3)).toBe(1);
  });

  it("Строка состоит из одного слова", () => {
    expect(isWord("Lorem ipsum")).toBeFalsy();
    expect(isWord("Lorem")).toBeTruthy();
  });

  it("Возведение в степень", () => {
    expect(pow(5, 3)).toBe(125);
    expect(pow(2, 2)).toBe(4);
  });
});
