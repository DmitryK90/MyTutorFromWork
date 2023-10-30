let user: {name: string, age: number, nickName: string} = {
  name: 'Sasha',
  age: 30,
  nickName: 'webd'
};
let admin: {name: string, age: number, nickName: string} = {
  name: 'Max',
  age: 20,
  nickName: 'Mad'
};
// данный код валидный, но лучше не повторяться, поэтому:
type Person = {name: string, age: number, nickName: string}; // создали пользовательский тип.
let user: Person = {
  name: 'Sasha',
  age: 30,
  nickName: 'webd'
};
let admin: Person = {
  name: 'Max',
  age: 20,
  nickName: 'Mad'
};
// применили тип Person к объектам.
Если структура объектом в целом схожа, но есть отличия, то:
let user: Person1 = {
  name: 'Sasha',
  age: 30,
  nickName: 'webd'
};
let admin: Person1 = {
  name: 'Max',
  age: 20,
  getPass(): string {
      return `${this.name}${this.age}`;
  }
};
// можно разбить на два пользовательских типа, или лучше модифицировать тип Person:
type Person1 = {
  name: string,
  age: number,
  nickName?: string,
  getPass?:() => string
}; // ? - опциональный.
