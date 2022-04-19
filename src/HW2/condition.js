export function maxNumber(a, b) {
  return a > b ? a : b;
}

export function monthName(str) {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сертябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  if (str.length > 2 || str.length === 0) return false;
  if (isNaN(Number(str))) return false;
  const num = +str;
  if(num < 1 || num > 12) return false;
  return months[num - 1];
}

export function circleFit(circle, square) {
  // Сторона квадрата
  const squareSide = Math.sqrt(square);
  // Площадь круга Pi*D*D/4
  const diameter = Math.sqrt(circle * 4 / Math.PI);
  const x = diameter <= squareSide ? " " : " не ";
  return `Площадь круга: ${circle}, площадь квадрата ${square}. Круг${x}поместится в квадрат`;
}