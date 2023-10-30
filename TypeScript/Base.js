Базовые типы(простые типы):
    - Boolean.
        let isCompleted: boolean = false;
        isCompleted = 42; // будет ошибка, т.к. 42 - это не boolean а number.
    - Number.
        const decimal: number = 6;
        const hex: number = 0xf00d; // бинарное число, всё норм.
    - String.
        const name: string = 'Dmitry'; // name определяем как строка.
        const sentence: string = `Hello, my name is ${name}!`; // шаблонная строка.
    - Null.
        typeof null; // 'object'.(в JS)
        typeof undefined; // 'undefined'.(в JS)
        ---
        const u: null = null; // в Ts.
        const n: undefined = undefined; // в Ts.
    - Void.
        Данный тип нужен для определения отсутствующих типов.
        function greetUser = (): void => {
            alert('Hello');
        } // в функции нет ключевого слова return, а это значит что она ничего не возвращает, и
        // следовательно результат выполнения функции это отсутствующий тип или void.
        // void написан после (), если напишем после названия функции, то получим ошибку,
        // т.к. в таком синтаксисе мы определяем тип константы, а не тип возвращаемого
        // функцией результата.
    - Array(массив).
        Способы опреления массива:
        let list: number[] = [1, 2, 55]; // тип данных - числа, и эти числа будут наход. в массиве.
        let list: Array<number> = [1, 2, 55]; // этот вариант называется - Generic type.
        let stringsAndNumbers: (string | number)[] = ['Age', 20]; // ещё одтн априант.
        let numbersArray: number[][] = [[1,2,3,4,5], [6,7,8,9,10]]; // многомерный массив.
    - Кортежи.
        Кортежи похожи на массивы с одним ключевым отличием. В кортежах можно указать тип каждого
        конкретного элемента. Нужно перечислить все типы в квадратных скобках, тем самым присвоив их
        каждой позиции.
        let exampleTuple: [number, string] = [20, 'https://tproger.ru'];// важно не менять местами.
    - Any(любой).
        let y: [any, any] = ['Hello', 10]; // для диначиски сформ. массива подойдёт.
        let z: Array<any> = ['Hello', 10]; // для диначиски сформ. массива подойдёт.
        ---
        let notSure: any = false; // может быть любым, и не вызовет никаких ошибок.
        notSure = true; // boolean.
        notSure = 42; // number.
        notSure = 'Hello'; // string.
    - Enum.
        Перечисление. Это такая сущность которая помогает лучше структурировать однотипные элем.
        enum Direction {
            Up,
            Down,
            Left,
            Right
        } // набор. каждому элементу соотвестствует свой индекс.
        Direction.Up; // 0
        Direction.Down; // 1
        Direction.Left; // 2
        Direction.Right; // 3
        -
        Reverse enum(получаем значение по ключу)
        Direction.[0]; // 'Up'
        Direction.[3]; // 'Right'
        ---
        enum Direction {
            Up = 2,
            Down = 5,
            Left = 7,
            Right
        } // можно сразу задать индекс.
        Direction.Up; // 2
        Direction.Down; // 5
        Direction.Left; // 7
        Direction.Right; // 8, индекс зависит от предыдущего, т.к. Left = 7, то Right = 8.
        -
        Reverse enum(как пример выше)
        Direction.Up; // 2
        Direction.[7]; // 'Left'
        ---
        Enum(на реальном примере):
        enum links {
            youtube = 'https://youtube.com/',
            vk = 'https://vk.com/',
            facebook = 'https://facebook.com/'
        }
        links.vk; // 'https://vk.com/'
        linsk.youtube; // 'https://youtube.com/'
        ---
        Enum при компиляции переписывается ы JS и происходит через функцию. Если стоит задачи
        минимизировать ресурсы и мощности, то можно воспользоваться константными перечислениями.
        const enum links {
            youtube = 'https://youtube.com/',
            vk = 'https://vk.com/',
            facebook = 'https://facebook.com/'
        } // не обязательно, это уже более сложно.
    - Never.
        Может использоваться в двух случаях:
            1) Когда функция возвращает ошибку, и не заканчивает своё выполнение.
                const msg = 'Hello';
                const error = (msg: string): never => {
                    throw new Error(msg);
                } // функция возвращает ошибку.
            2) Когда функция постоянно выполняется.
                const infiniteLoop = (): never => {
                    while (true){
                    }
                } // бесконечный цикл, и never говорит, что от этих функций результата не получим.
    - Object.
        Предназначен для определения объектов или не примитива.
        const create = (o: object | null): void => {}; // в качестве аргумента принимает - о, этот
        // тип это либо объект либо null.
        create(1); // ошибка.
        create('5'); // ошибка.
        create({obj: 1}); // подходит.
        ---
        const human = {
         firstName: 'Frank',
         age: 32,
         height: 185
        }; // в коде выше создаётся объект human с 3 разными парами ключ-значение.
        ---
        А вот как создавать функцию в объектах:
        const human = {
         firstName: 'Старец',
         age: 32,
         height: 185,
         greet: function(){
          console.log("Приветствую тебя, путник!")
         }
        };
    - Multyple.
        Тип объединения.
            let id: number | string; // id может быть числом или строкой.
            id = 10; // подходит.
            id = '10'; // подходит.
            id = false; // ошибка.
    - Type.
        С помощью неё можно создавать пользовательские типы.
            type Name = string; // пользовательский тип.
            let id: Name;
            id = '10'; // true.
            id = 10; // false.
        ---
            type Human = {firstName: string, age: number, height: number};
        В примере выше создаётся собственный тип Human, содержащий 3 разных свойства. Пример создания
        объекта типа Human:
            const human: Human = {firstName: ‘Franz’, age: 32, height: 185}
    ---
    - Аргументы функций и возвращаемые типы.
        В TypeScript можно передавать тип аргумента функций и указывать тип возвращаемого значения. Как
        это выглядит:
            function printState(state: State): void {
             console.log(`The song state is ${state}`)
            }
            function add(num1: number, num2: number): number {
             return num1 + num2
            }
        В примере выше создаются две функции, обе имеют аргументы с определёнными типами. Во второй
        функции так же определён тип возвращаемого значения.
        Вызываются функции точно так же, как и в обычном JavaScript, но компилятор проверяет правильность
        передаваемых параметров, и в случае чего выводит ошибку.
            add(2, 5)
            add(1) // "Error to few parameters"
            add(5, '2') // "Error the second argument must be type number"
    - Опциональные (необязательные) аргументы.
        Аргумент функции можно сделать необязательным, поставив после него оператор ?. Вот как это выглядит:
            function printName(firstName: string, lastName?: string) {
             if (lastName)
              console.log(`Firstname: ${firstName}, Lastname: ${lastName}`);
             else
              console.log(`Firstname: ${firstName}`);
            }
        В примере выше параметр lastName является необязательным, и если он не будет передан,
        компилятор не выдаст ошибку.
            printName('Gabriel', 'Tanner')
            printName('Gabriel')
        Эти две строки будут исполнены без ошибок.
    - Ключевое слово as.
        Чтобы кастовать переменную, нужно после оператора as написать тип, в который переводится переменная.
        let str: any = 'Текстовая переменная'
        let strLength = (str as string).length
        В этом коде текстовая переменная str кастуется в тип String, а поэтому можно использовать параметр
        length (это сработает и без кастования, если есть соответствующее разрешение в настройках TSLINT).