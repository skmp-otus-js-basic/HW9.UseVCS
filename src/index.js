import { homeWork_1 } from "./HW1/homeWork_1";

const hw_title = ["Домашнее задание № 1 «Линейные алгоритмы»", "Домашнее задание №2 «Условия»"];
let app = document.querySelector("#app");
let ol = document.createElement("ol");
homeWork_1();

export function addTitle(num) {
  let title = document.createElement("h4");
  title.innerText = hw_title[num];
  app.append(title);
  app.append(ol);
}

export function writeResult(str) {
  console.log(str);
  let li = document.createElement("li");
  li.innerText = str;
  ol.append(li);
}
