export function addProperty(obj, age, num) {
  obj[age] = num;
}

export function deepCopy(obj, value) {
  return { ...obj, role: value };
}

export function destruct(obj) {
  return Object.entries(obj);
}
