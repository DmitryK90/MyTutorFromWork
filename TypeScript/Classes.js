class User {
  name: string;
  age: number;
  nickName: string;

  constructor(name: string, age: number, nickName: string) {
      this.name = name;
      this.age = age;
      this.nickName = nickName;
  }
}
const yauhen = new User('Yauhen', 31, 'Modh');
yauhen; // {name: 'Yauhen', age: 31, nickName: 'Modh'}
---
class User {
  public name: string; // public по умолчанию, имеет свободный доступ.
  private nickName: string; // private не может быть доступен за пределами класса.
  protected age: number; // protected доступ могут получить только наследники.
  readonly pass: number; // readonly доступен только для чтения.


  constructor(name: string, age: number, nickName: string, pass: number) {
      this.name = name;
      this.age = age;
      this.nickName = nickName;
      this.pass = pass;
  }
}
const yauhen = new User('Yauhen', 31, 'Modh', 123);
yauhen.name; // 'Yauhen'
yauhen... в других случаях получим ошибки.
---
Сокращенная форма записи:
class User {
  constructor(
      public name: string,
      public age: number,
      public nickName: string,
      public pass: number
  ) {}
}

...неполное описание классов.