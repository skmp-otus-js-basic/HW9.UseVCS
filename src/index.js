import { homeWork_1 } from "./HW1/homeWork_1";
import { homeWork_2 } from "./HW2/homeWork_2";

const hw_title = ["Домашнее задание № 1 «Линейные алгоритмы»", "Домашнее задание №2 «Условия»"];
let app = document.querySelector("#app");
let ol;
homeWork_1(0);
homeWork_2(1);

export function addTitle(num) {
  let title = document.createElement("h4");
  title.innerText = hw_title[num];
  app.append(title);
  ol = document.createElement("ol");
  app.append(ol);
}

export function writeResult(str) {
  console.log(str);
  const li = document.createElement("li");
  li.innerText = str;
  ol.append(li);
}
