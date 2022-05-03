import { createUI } from "./layout";

describe("Module hw7 tests", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("section");
    createUI(el);
  });

  it("Проверка разметки", () => {
    expect(el.querySelector("div.inbut")).toBeTruthy();
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("div.list")).toBeTruthy();
    expect(el.querySelectorAll("p").length).toBe(3);
  });

  it("При клике на кнопку добавляется новый параграф", () => {
    el.querySelector("input").value = "123";
    el.querySelector("button").click();
    expect(el.querySelector("div.list").lastChild.innerHTML).toBe("123");
  });

  it("Количество параграфов всегда не больше пяти", () => {
    for (let i = 1; i < 10; i++) {
      el.querySelector("input").value = i.toString();
      el.querySelector("button").click();
    }
    expect(el.querySelector("div.list").childElementCount).toBeLessThanOrEqual(
      5
    );
  });
});
