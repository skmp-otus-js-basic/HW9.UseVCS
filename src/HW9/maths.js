export function triangle(cathetus1, cathetus2, hypotenuse) {
  return (
    hypotenuse * hypotenuse === cathetus1 * cathetus1 + cathetus2 * cathetus2
  );
}

export function circumference(r) {
  return 2 * r * Math.PI;
}

export function circleArea(r) {
  return r * r * Math.PI;
}

export function quadratic(a, b, c) {
  const base = [];
  // Квадратное уравнение: axx + bx + c = 0, дискриминант: D = bb − 4ac
  const d = b * b - 4 * a * c;

  // Если D < 0, корней нет, если D > 0, корней будет два
  if (d > 0) {
    const x1 = (Math.sqrt(d) - b) / (2 * a);
    const x2 = (-Math.sqrt(d) - b) / (2 * a);
    base.push(x1);
    base.push(x2);
  }
  // Если D = 0, есть ровно один корень
  if (d === 0) {
    const x = (Math.sqrt(d) - b) / (2 * a);
    base.push(x);
  }
  return base;
}
