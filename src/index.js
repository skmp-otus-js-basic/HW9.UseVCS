import homeWork1 from "./HW1/homeWork1";
import homeWork2 from "./HW2/homeWork2";
import homeWork3 from "./HW3/homeWork3";
import homeWork4 from "./HW4/homeWork4";
import homeWork5 from "./HW5/homeWork5";
import homeWork6 from "./HW6/homeWork6";
import homeWork7 from "./HW7/homeWork7";
import homeWork8 from "./HW8/homeWork8";
import homeWork9 from "./HW9/homeWork9";
import homeWork10 from "./HW10/homeWork10";
import "./style.css";

const hwTitle = [
  "Домашнее задание №1 «Линейные алгоритмы»",
  "Домашнее задание №2 «Условия»",
  "Домашнее задание №3 «Циклы»",
  "Домашнее задание №4 «Объекты»",
  "Домашнее задание №5 «Массивы»",
  "Домашнее задание №6 «Функции»",
  "Домашнее задание №7 «Работа с DOM»",
  "Домашнее задание №8 «Работа с датами»",
  "Домашнее задание №9 «Математические операции»",
  "Домашнее задание №10 «Регулярные выражения»",
];

const nav = document.querySelector("#buttons");
let button;
for (let i = 1; i <= 10; i++) {
  addButton(i);
}
const buttons = document.querySelectorAll("nav div");
buttons.forEach((el) => {
  el.addEventListener("click", runHomeWork);
  el.addEventListener("mouseover", showPreview);
  el.addEventListener("mouseout", hidePreview);
});

const section = document.querySelector("#execution");
const preview = document.getElementById("preview");

function runHomeWork() {
  const current = this;
  buttons.forEach((el) => {
    if (el === this) el.className = "active";
    else el.className = "";
  });
  addTitle(current.id);
  switch (current.id) {
    case "1": {
      homeWork1();
      break;
    }
    case "2": {
      homeWork2();
      break;
    }
    case "3": {
      homeWork3();
      break;
    }
    case "4": {
      homeWork4();
      break;
    }
    case "5": {
      homeWork5();
      break;
    }
    case "6": {
      homeWork6();
      break;
    }
    case "7": {
      homeWork7(section);
      break;
    }
    case "8": {
      homeWork8();
      break;
    }
    case "9": {
      homeWork9();
      break;
    }
    case "10": {
      homeWork10();
      break;
    }
    default:
      break;
  }
}

function showPreview(evt) {
  preview.style.left = `${evt.pageX + 20}px`;
  preview.style.top = `${evt.pageY + 10}px`;
  preview.innerText = hwTitle[evt.target.id - 1];
  preview.className = "active";
}

function hidePreview() {
  preview.className = "";
}

function addButton(id) {
  button = document.createElement("div");
  button.addEventListener("click", runHomeWork);
  button.innerText = id;
  button.setAttribute("id", id);
  nav.appendChild(button);
}

let ol;

export function addTitle(num) {
  section.innerHTML = "";
  const title = document.createElement("h4");
  title.innerText = hwTitle[num - 1];
  section.append(title);
  ol = document.createElement("ol");
  section.append(ol);
}

export function writeResult(str) {
  console.log(str);
  const li = document.createElement("li");
  li.innerText = str;
  ol.append(li);
}
