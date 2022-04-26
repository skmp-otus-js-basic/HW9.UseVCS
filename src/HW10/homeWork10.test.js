import * as reg from "./regex";

describe("Module hw10 tests", () => {
  it("Является ли введённая строка датой", () => {
    expect(reg.isDate("2019-08-25T10:41:50.417+03:00")).toBeTruthy;
    expect(reg.isDate("Lorem ipsum")).toBeFalsy;
  });

  it("Является ли введённая строка адресом электронной почты", () => {
    expect(reg.isEmail("abc@mail.ru")).toBeTruthy;
    expect(reg.isEmail("Lorem ipsum")).toBeFalsy;
  });

  it("Является ли введённая строка номером телефона", () => {
    expect(reg.isTelephoneNumber("+7(951) 57-69-172")).toBeTruthy;
    expect(reg.isTelephoneNumber("+79515769172")).toBeTruthy;
    expect(reg.isTelephoneNumber("8(951) 57-69-172")).toBeTruthy;
    expect(reg.isTelephoneNumber("89515769172")).toBeTruthy;
    expect(reg.isTelephoneNumber("Lorem ipsum")).toBeFalsy;
  });
});
