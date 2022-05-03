import { addProperty, objCopy, destruct } from "./objects";

describe("Module hw4 tests", () => {
  let user;
  const value = "admin";
  beforeEach(() => {
    user = { name: "John" };
    addProperty(user, "age", 20);
  });

  it("Проверка наличия свойства в объекте", () => {
    expect(user).toHaveProperty("age", 20);
    expect(Object.keys(user).join()).toBe("name,age");
  });

  it("Создать копию user и добавить поле role", () => {
    const admin = objCopy(user, value);
    expect(admin).toHaveProperty("role", value);
    expect(admin.role).toBe(value);
    expect(Object.keys(admin).join()).toBe("name,age,role");
  });

  it("Записать все поля admin в отдельные переменные", () => {
    const admin = objCopy(user, value);
    const arr = destruct(admin);
    const [, name] = arr[0];
    const [, age] = arr[1];
    const [, role] = arr[2];
    expect(name).toBe(admin.name);
    expect(age).toBe(admin.age);
    expect(role).toBe(admin.role);
  });
});
