export function isDate(str) {
  const regexp =
    /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\+[0-9]{2}:[0-9]{2}/;
  return regexp.test(str);
}

export function isEmail(str) {
  const regexp = /[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,5}/;
  return regexp.test(str);
}

export function isTelephoneNumber(str) {
  const regexp = /\+?[78]\(?[0-9]{3}\)?\s?[0-9]{2}-?[0-9]{2}-?[0-9]{3}/;
  return regexp.test(str);
}
