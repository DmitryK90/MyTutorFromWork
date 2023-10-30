Interface type.

// interface & type
interface User {
    name: string,
    age: number
} // визуально это тот же самый обэект, однако в действительности это надобъектная сущность которая помогает
// описать форму объекта, или то как он будет выглядеть в будущем.
const test: User = {
    name: 'Sahsa',
    age: 31
}

type User {
    name: string,
    age: number
} // аналогичный споособ, но interface может расширяться и имеет более широкие способности.

--- ещё пример:
interface User {
    name: string,
    age: number,
    [propName: string]: any;
} // name, age - обязательные, а далее может быть сколько угодно.
const test: User = {
    name: 'Sahsa',
    age: 31,
    nickName: 'Hoiks',
    justTest: 'test'
}
------ ещё пример построенный на классе:
interface User {
    name: string,
    age: number,
    getPass(): string
}
class Test1 implements User {
    name: string = 'Sasha';
    age: number = 31;
    nickName: string = 'Hoiks'; // Not in interface
    getPass() {
        return `${this.name}${this.age}`
    }
} // класс создан на основе interface User, и записывается через implements, interface описывает
// минимальный набор необходимых параметров, так же остальные парам. могут присутствовать, и
// nickName не вызовет ошибки. Может так же класс быть создан на основе нескольких интерфейсов
// пишется так ...implements User, User1 {...

Расширение interface:
interface User {
    name: string,
    age: number
}
interface Admin extends User {
    getPass(): string
} // на основе User создаём новый Admin, т.е. в Admin есть все что есть в User, но плюс ещё метомд getPass(): string.
class Test2 implements Admin {
    name: string = 'Sasha';
    age: number = 31;
    getPass() {
        return `${this.name}${this.age}`
    }
}

Необязательные свойства:
При реализации интерфейса можно реализовывать не все его свойства. Чтобы сделать свойство необязательным,
после имени свойства нужно поставить оператор ?. Пример:
    interface Person{
     name: string
     age?: number
    }
    const person: Person = {name: 'Frank', age: 28}
    const person2: Person = {name: 'Gabriel'}