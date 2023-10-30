Пространства имён. Переменные могут быть глобальные и локальные. Инкапсулирает все добавленные в неё сущности.

namespace Utils {
    export const SECRET: string = '123321';
    const PI: number = 3.13;

    export const getPass = (name:string, age: number): string => `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;
};
const myPass = Utils.getPass('Yauhen', 31); // 'Yauhen31'
const isSecret = Utils.isEmpty(Utils.SECRET); // 'false'
const PI = 3; // не будет ошибкой, это не та же переменная что и внутри Utils.
---
Для импорта используем(три / вначале):
///<reference path='Utils.ts' />
--------------
Modules.(импорт, экспорт в ES6)
Название файла в котором лежит данный код - Utils.ts:
    export const SECRET: string = '123321';
    export const getPass = (name:string, age: number): string => `${name}${age}`;

Customers.ts:
    import {getPass, SECRET} from './Utils';
    const myPass = getPass(SECRET, 31); // 'Yauhen31'

