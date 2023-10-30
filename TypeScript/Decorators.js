Декораторы - это возможность TypeScrips по добавлению аннотаций и мета-программного синтаксиса для
объявления классов и функций. Существует четыре основных типа декоратора: класса, свойства, метода и аксессора.

Декоратор класса:
Структура декоратора:
const logClass = () => ();

Полная реализация декоратора для класса:
const logClass = (constructor: Function) => {
    console.log(constructor);
}
@logClass // применяем декоратор(запускаем) выведет в консоль.
class User {
    constructor(public name: string, public age: number) {}
    public getPass(): string {
        return `${this.name}${this.age}`
    }
}
---
Декоратор свойства:...много, см видео в файле 'Ссылки где учил'.