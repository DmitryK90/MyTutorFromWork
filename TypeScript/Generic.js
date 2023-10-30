Общие типы.
Дженерики (англ. generics) позволяют создавать компоненты, которые совместимы с большим количеством
типов, а не только с одним. Это делает компоненты более «открытыми».
Ниже приведён пример того, как можно это реализовать с помощью дженерика:
    function dummyFun<T>(arg: T): T {
     return arg
    }
В этом коде используется generic-параметр T, тип которого можно будет захватить и в дальнейшем использовать.
-----
const getter = <T>(data: T): T => data; // в ES6.
-
function getter<T>(data: T): T { // в ES5.
    return data;
}
// <T> - может быть любая буква, но растространено как <T>(type).
getter(10).length; // у number нет метода length.
getter('test').length; // 4

Для понимания под капотом это выглядит так:
const getter = (data:number): number => data;
getter(10).length; // у number нет метода length.
-
const getter = (data: string): string => data;
getter('test').length; // 4

// Т.е. generic динамически манипулирует получаемыми типами, и подставляет их вместо себя, в примерах
// выше компилятор сам определяет какой тип вернуть.

const getter = <T>(data: T): T => data;
getter<number>(10).length; // в момент вызова указывает, что функция должна вернуть тип number.
-----------
Как generic работает с классами:
Без Generic:
class User {
    constructor(public name: string, public age: number) {}
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}
Переписываем на Generic:
class User<T> {
    constructor(public name: T, public age: T) {}
    public getPass(): string { // на выходе getPass преобразует ответ в строку.
        return `${this.name}${this.age}`
    }
}
const Sasha = new User('Sasha', '31'); // на основе класса user создаёт нового юзера.
const max = new Usew(123, 123); // на основе класса user создаёт нового юзера.

Sasha.getPass(); // 'Sasha31'
max.getPass(); // '123123'

Но если нам надо передать string и number:
class User<T, K> { // можно указать сразу тип = class User<T, K extends number> {...
    constructor(public name: T, public age: K) {}
    public getPass(): string { // на выходе getPass преобразует ответ в строку.
        return `${this.name}${this.age}`
    }
}
const leo = new User('Leo', 22);
leo.getPass(); // 'Leo22'