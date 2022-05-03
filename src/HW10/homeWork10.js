import { writeResult } from "../index";
import * as reg from "./regex";

export default function homeWork10() {
  // Является ли введённая строка датой YYYY-MM-DDTHH:mm:ss.sssZ
  let str = "2019-08-25T10:41:50.417+03:00";
  let x = reg.isDate(str) ? "" : "не ";
  writeResult(`Строка '${str}' ${x}является датой`);

  // Является ли введённая строка адресом электронной почты
  str = "mail2@mail.ru";
  x = reg.isEmail(str) ? "" : "не ";
  writeResult(`Строка '${str}' ${x}является адресом электронной почты`);

  // Является ли введённая строка номером телефона
  str = "+7(951) 57-69-172";
  x = reg.isTelephoneNumber(str) ? "" : "не ";
  writeResult(`Строка '${str}' ${x}является номером телефона`);
}
