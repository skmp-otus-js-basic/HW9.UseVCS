export function dateFormat(strDate) {
  const formatted = `${strDate.substr(6, 4)}-${strDate.substr(
    3,
    2
  )}-${strDate.substr(0, 2)}`;
  const date = new Date(formatted);
  const tsDate = Number(date);
  return tsDate;
}

export function weekDay(strDate) {
  const tsDate = dateFormat(strDate);
  let date = new Date(tsDate);
  const day = date.getDay();
  const week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return week[day];
}

export function minElapsed() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  return hours * 60 + minutes;
}

export function dateCompare(strDate1, strDate2) {
  const tsDate1 = dateFormat(strDate1);
  const tsDate2 = dateFormat(strDate2);
  return tsDate1 >= tsDate2 ? strDate1 : strDate2;
}
