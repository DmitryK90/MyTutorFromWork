Функции:
    const createPassword = (name: string = 'Max', age: number | string = '20') => `${name}${age}`;
    createPassword(); // 'Max20' , т.к. 'Max' и '20' заданы как значения по умолчанию.
    createPassword('Jack', 31); // 'Jack31'
    createPassword('Jack', '31'); // 'Jack31'
    ---
    const createPassword = (name: string, age: number): string => `${name}${age}`;
    // после скобок : string - это тип возвращаемых функцией данных.
    createPassword('Jack'); // ошибка, не передан аргумент age.
    -
    const createPassword = (name: string, age?: number) => `${name}${age}`; // знач ? добавили.
    // это означает, что аргумент age - опциональный(т.е. может быть , а может и нет).
    createPassword('Jack'); // обибки уже не будет.

    Rest:
    const createSkills = (name, ...skills) => `${name}, my skills are ${skills.join()}`;
    // принимает имя и массив скилов(или массив строчный значений).
    Rest type:
    const createSkills = (name: string, ...skills: Array<string>) =>
        `${name}, my skills are ${skills.join()}`;
    // описали типы,
    createSkills('Jack', 'JS', 'ES6', 'React'); // 'Jack, my skills are JS, ES6, React'
    ---
    const createPassword = (name: string, age: number | string): string =>
        `${name}${age}`; // функция верёт значение с типом string(указано после скобок... ): string)
    const sum = (first: number, second: number): number => first + second; // вернёт значение суммы(тип number).
    const createEmptyObject = (): object => ({}); // вернёт объект.
    ---
    Если функция не возвращает никаких данных используем Void или Never(см. Base файл описания типов):
    const greetUser: void = () => {
        alert('Hello');
    } // функция ничего не возвращает.
    -
    const msg = 'Hello';
    const error = (msg: string): never => {
        throw new Error(msg);
    } // функция возвращает ошибку.
    -
    const infiniteLoop = (): never => {
        while (true){
        }
    } // бесконечный цикл, и never говорит, что от этих функций результата не получим.
    ---
    Function type:
    let myFunc: (firstArg: string) => void; // описали переменную, она ничего не возвращает.
    function oldFunc(name: string): void => {
        alert('Hello');
    }
    myFunc = oldFunc; // переменной присвоили функцию, в стрелочных функциях такое встречается не часто.
    // void в переменной должен совпадать с void функции.