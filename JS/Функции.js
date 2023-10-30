Функция - это блок кода который определяется один раз и может вызываться многократно.
---function declaration---
function testFunction() {
    const x = 5;
    const y = 10;
    console.log(x+y); // 15.
}
testFunction(); // запускаем функцию.

-----------Function Expression / Declaration-----------
---Function declaration---
Вызов функции в любой части кода(до или после самого блока кода). Это более удобно, удобно
надо быть оккуратным в режиме 'use strict', т.к. функции видны только внутри блока в кото-
ром объявлены.
function sum(a, b) {
  return a + b;
} // конструкция.
Пример:
sayHi("Вася"); // Вызываем функцию до блока кода, работает: Привет, Вася
function sayHi(name) {
  alert( "Привет, " + name );
}
sayHi("Вася"); // Вызываем после блока кода, то же будет работать, результат тот же.

---Function expression---
Это переменная или констанка которой присвоена функция.
let sum = function(a, b) {
  return a + b;
} // конструкция.
Пример:
sayHi("Вася"); // ошибка! Блок кода в expression ещё не инициализирован!
let sayHi = function(name) {
  alert( "Привет, " + name );
}
sayHi("Вася"); // Работает.


-------------------АРГУМЕНТЫ ФУНКЦИИ-------------------

function sum1(a, b) { // a, b - аргументы(названия любые), можно писать (a=1, b=5).
    console.log(a+b); // 12.
}
sum1(5, 7); // подставятся в a=5, b=7.
let c = 10;
sum1(c, 3); // a=c=10, b=3. Результат 13.
-----
function sum2 (...args) { // принимает любое кол-во аргументов, которые собираюся в массив.
    console.log(args); // [1, 2, 3, 4] молучаем массив.
    let sum = args.reduce((accum, item) => accum += item);
    console.log(sum); // 10.
}
sum2(1, 2, 3, 4);

//---функция как рагумент---
function showAll(result) { //приходит 45 из функции show1.
    document.querySelector('#out').innerHTML = `${result}` // выводим в div.// результат 45.
}
function show1(num, drowFunction) { //num=45; drowFunction=showAll().
    drowFunction(num);
}
show1(45, showAll);
Дополнение в функции выше:
function show1(drowFunction, ...num) { //принимает любое колич. аргументов
    drowFunction(num);
}
show1(showAll, 45, 30, 77, 5); // значения после showAll подставляются в num.

-----------------------RETURN-----------------------
function f1(x, y) {
    return x + y;
}
console.log(5+f1(2,7)); // 14.
---пример---
document.querySelector('.btn').addEventListener('click', function() {
    const s = document.querySelector('.input').value; //берём введёное значение из input.
    document.querySelector('.out').innerHTML = 'Hello' + clearText(s); // записывает в out.
    console.log('Hello ' + clearText(s)); // выводим то же в консоль.
});
function clearText(data) {
    return data.trim().toLowerCase();
}// вводим текст в Input, далее функция clearText убирает пробелы(если были при вводе) и
//- переводит в нижний регистр букв и возвращает значение в первую функцию .

---Return может прерывать функцию---
function f2() {
    console.log('1');
    return; // функция останавливается.
    console.log('2');
    console.log('3');
} // результат 1.
f2();

---пример---
function indexOfEmul(arr, num) {
    for (let i = 0; i < arr.length; i++) { // пробегаемся по массиву.
        if (arr[i] === num) return i; // если значение равно num=44, то возвр id элемента.
    }
    return -1; // если else то выводит -1.
}
let result = indexOfEmul([22, 33, 44, 55], 44);
console.log(result); // 2.

---пример---
Пользователь вводат кол-во лет:
document.querySelector('.btn').addEventListener('click', function() {
    let year = +document.querySelector('.input').value // + значит вводим только числа.
    if(isNan(year)) return; // если строка текст прерываем.
    if(year <= 0 || year > 140) return;
    document.querySelector('.out').innerHTML = 2023 - year;
});

---пример---
Задача: найти сумму.
const arr = [[3, 4, 5], [6, 7, 8]];
function f3() {
    let s = 0;
    for(let i = 0; i < arr.length; i++) { // пробегаемся по массиву arr.
        s += sum(arr[i]); // в s вызываем функцию sum(ниже) и записываем в s при каждой итерации.
        console.log(arr[i]); // получили [3, 4, 5] и [6, 7, 8] в двух итерациях.
    }
    console.log(s); // 33 - сумма всех чисел массивов(можно рекурсией все это сделать).
}
function sum(arr) { // приходит два массива [3, 4, 5] и [6, 7, 8].
    let sum = 0;
    for(let i = 0; i < arr.length; i++) { // проходимся по каждому массиву.
        sum += arr[i]; // 3, 4, 5 и второй проход 6, 7, 8.
    }
    return sum; // возвращаем значения в первую функцию.
}
f3();

---пример---
const arr = [[3, 4, 5],[6, 7, 9],[7, 7, 1],[2, 2]];
const everArr = arr.filter(item => { // item = [3, 4, 5] и [6, 7, 8] и [7, 7, 1] и [2, 2]].
    return (sum(item) % 2 === 0); // запускаеи summ(),пров. на чётность, все кроме [7, 7, 1] тк сумма = 15.
}); // если после проверки true получаем, то что в консоли ниже.
    console.log(everArr); // [[3, 4, 5],[6, 7, 9],[2, 2]]. ФИНАЛ!
function sum(arr) { // приходит [3, 4, 5] и [6, 7, 8] и [7, 7, 1] и [2, 2].
    let sum = 0;
    for(let i = 0; i < arr.length; i++) { // проходимся по каждому массиву.
        sum += arr[i]; // 3, 4, 5 и второй проход 6, 7, 9. sum=12, sum=22 и тд
    }
    return sum; // возвращаем значения 12, 22 и тд в первую функцию.
}

---return функции---
function f4() {
    return sum;
}
let s = f4();
console.log(s([10, 20, 30])); // 60.
function sum(arr) { // приходит 10, 20, 30.
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum; // возвращаем значения в первую функцию.
}

-----------------------Стрелочные функции-----------------------
Сокращенный способ записи анонимных функций. Стрелочная функция не имеет собственного this, и
берёт его из глобальной области видимоста т.е. this = window. Call и apply не работают здесь.

function sum(a, b) {
    return a + b;
}
function multy(a, b) {
    return a*b;
}
// Запуск двух функций.
document.querySelector('#test1').addEventListener('click', () => {
    let res = sum(23, 45); // sum делаем a+b.
    console.log(res); // 68.
    let res2 = multy(23, 45); // multy делает a*b.
    console.log(res2); // 1035.
});
// callback
const arr = [4, 5, 6, 7, 8];
function pow(a) {
    return a**2; // возводим в квадрат.
}
const res = arr.map(pow); // каждое значение массива передаём в функцию pow.
console.log(res); // [16, 25, 36, 49, 64].

//стрелочная
const res1 = arr.map(item => pow(item)); // перебираем массив arr и передаём в функцию pow.
console.log(res1); // [16, 25, 36, 49, 64].

//Ещё пример(проверка на четные числа):
const res2= arr.filter(function(item) {
    if(item %2 === 0){
        return true;
    }
});
console.log(res2); // [4, 6, 8].
//Тоже через стрелочную сокращенную:
const res3 = arr.filter(item => item %2 ===0);
console.log(res3); // [4, 6, 8].

-----------------------Функции callback-----------------------
Функция которая передаётся в другую функцию в качестве аргумента.

const arr1 = [7, 4, 5, 6, 8];
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');

function f1(arr, myFunc, block) { // приняли аргументы из вызова ниже f1(...)
    arr1[3] = arr1[3]*2; // элем с id=3 умножаем на 2.
    myFunc(arr, block); // MyFunc это showArr по сути(просто 2ой аргумент, название любое).
}
function showArr(arr, block) { // получили аргументы из myFunc.
    let out = '';
    for (let i = 0; i < arr.length; i++) { // проходимся по массиву переданному в аргумент.
        out += arr[i] + '_';
    }
    block.innerHTML = out; // 7_4_5_12_8_
}
f1(arr1, showArr, out1); // Запускаем функцию f1 с тремя аргументами, первый - массив, второй -
// функция showArr(функция showArr это функция callback), третим - куда выводим.

// Пример:
const arr2 = arr1.map(item => item**2); // в arr2 записываем arr1 возведённую в квадрат.
showArr(arr2, out2); // Используем функцию в примере выше. Результат [49, 16, 25, 144, 64].

// Пример(получаем данные из form):
document.querySelector('#test').addEventListener('click', () => {
    getUserName(fixUserName);
}); // При нажатии на кнопку запускаем функцию getUserName с аргументом fixUserName, т.е.
// - кидаем в getUserName функцию fixUserName.
function getUserName(fixFunc) { // fixFunc = fixUserName.
    const userName = document.querySelector('#inp').value; // получули значение из input.
    console.log(fixFunc(userName)); // запустили fixUserName и в неё прокинули знач из input.
}
function fixUserName(str) { // фиксим значение из input.
    return str.trim().toLowerCase(); // убираем пробелы и переводим в нижний регистр.
}

-----------------Асинхронные callback функции-----------------
async function pageLoader(callback) {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // await - дождаться ответа.
    callback(data);
}
 Другой вид:
function pageLoader(callback) {
    fetch('https://jsonplaceholder.typicode.com/todos/1') // await - дождаться ответа.
        .then(response => response.json()) // .then - когда выполнен запрос на сервер выше, то..
        .then(json => callback(json)) // когда получен ответ от сервера выше, запускаю callback.
}
function getAJAX(data) {
    console.log('Послал запрос');
    console.log('Ответ сервера');
    console.log(data);
}
pageLoader(getAJAX);

-----------------Ад callback-ов-----------------
Когда вложенность слишком большая, что мешает читать код.
function pageLoader() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            console.log('Послал запрос');
            console.log('Ответ сервера');
            console.log(json);
            fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
                .then(response => response.json())
                .then(json => {
                    console.log('Послал запрос');
                    console.log('Ответ сервера');
                    console.log(json);
                })
            });
};
pageLoader();

-----------------Контекст функции и this-----------------
Это область видимости переменных + переменная this.
this - это ссылка на объект который вызывает код в данный момент или на чём произошло событие
вызывающее данную функцию.

let count = 0;

function f1() {
    console.log(count);
    this.textContent = count;
    count++;
}
document.querySelector('#test').addEventListener('click', f1); // в данном случае this это кнопка.

---call---
Позволяет подменить запустк функции с нужным контекстом.
document.querySelector('#btn').addEventListener('click', () => {
    f1.call(document.querySelector('#btn')); // 1 парам аргум = this, можно указать любой.
});

Пример:
function f2(count) {
    console.log(count);
    this.textContent = count; // название кнопки = значению count.
}
document.querySelector('#btn').addEventListener('click', () => {
    count++;
    f2.call(document.querySelector('#btn1'), count); // 1 парам аргум = this, можно указать любой.
}); // запускаем функцию f2 при нажатии кнопки btn, где this при нажатии = #btn1(1 арг.), 2 арг = count,
// ... в итоге получаем название кнопки btn1 меняется при каждом нажатии(на btn) на значение count.

---apply---
Позволяет подменить запустк функции с нужным контекстом.(как и call походу)
document.querySelector('.select').addEventListener('change', f1);
function f1 () {
    document.querySelector('.out').textContent = this.value
}
f1.apply(document.querySelector('.select')); // запустить функцию f1 в внутрь положить-
                                             //..this = значению выбранного селекта.
Пример:
function sum1(a, b) {
    this.innerHTML = a + b;
}
document.querySelector('#btn').addEventListener('click', () => {
    sum1.call(document.querySelector('#out'), 5, 7); // указывает this = #out, в #out выводится 12.
    sum1.apply(document.querySelector('#out1'), [5, 7]); // тоже самое тольео в #out1.[5, 7]разбивается на арг.
}); // 1 аргумент в .call равен this.

---bind---
Позволяет создать новую функцию и привязать контекст один раз, и потом её выполнять.
const f3 = f1.bind(document.querySelector('#out1'));
document.querySelector('#btn').addEventListener('click', f4);

const sum2 = sum1.bind(document.querySelector('#out1'));
sum2(4, 5);

---Частичные функции, с переапределённым аргументов(частичные вычисления)---
function sum3(a, b, c) {
console.log(argumenst); // все аргументы выведет.
    this.innerHTML = a + b + c;
}
const sum4 = sum3.bind(document.querySelector('#btn'), 10); // добавили аргумент 10, он первым будет.
document.querySelector('#btn').addEventListener('click', () => {
    sum4(3, 4, 5); // по сути будет (10, 3, 4, 5)
}); // название кнопки #btn смениться на 17.(4 аргумент будет не учтён в функции sem3)

------------------Чистые функции и функции высшего порядка----------------
---Pure(чистые)---
Чистымифункциями принято называть функции которые возвращают значение зависящее только от
входящих аргументов и параметров без каких либо побочных эффектов.
function squad (n) {
    return n**2;
}
console.log(squad(4));

Пример НЕ чистой функции:
function squad1(n) {
    document.querySelector('.out').textContent = n**2;
} // не чистая, т.к. изменяет состояние DOM (состояние страницы, элемента)

---функции высшего порядка---
Это функция которая может принять функцию в виде аргумента и возвратить какую либо функцию.
function pOdd() {
    console.log('odd');
}
function pEven() {
    console.log('even');
}
function myNumber(n, odd, even) {
    if(n % 2 === 0) return even; // если число чётное возвр функцию even.
    else return odd;
}
let z = myNumber(5, pOdd, pEven);
z(); // odd (вернуло функцию)

Пример:
const w = [
    {name: 'Ivan', 'age': 35},
    {name: 'Sergey', 'age': 25},
    {name: 'Olga', 'age': 27}
];
let w1 = [];
for (let i = 0; i < w.length; i++) {
    if (w[i].age >= 26) w1.push(w[i]);
}
console.log(w1); // массив объектов Ivan и Olga выдаст.

или можно так:
w1 = w.filter(mySort);
function mySort(item) {
    if (item.age >= 26) return true;
}
console.log(w1); // массив объектов Ivan и Olga выдаст.

или:
w1.filter(item => item.age >= 26);
console.log(w1); // массив объектов Ivan и Olga выдаст.

Пример функции высшего порядка:
const user = {
    age: 24,
    password: 'sdjfhk17',
    agreeToTerm: true,
}
function checkAge(user) {
    return user.age > 18;
}
function checkPassword(user) {
    return user.password.length >= 8;
}
function checkTerms(user) {
    return user.agreeToTerm === true;
}

function validate(obj, ...tests) {
    for (let i = 0; i < tests.length; i++) {
        if (tests[i](obj) === false) return false;
    }
    return true;
}
console.log(validate(user, checkAge, checkPassword, checkTerms));
//---
function createValidator (...tests) {
    return function (obj) {
        for (let i = 0; i < tests.length; i++) {
            if (tests[i](obj) === false) return false;
        }
        return true;
    }
} // принимает функцию и возвращает функцию(функция высшего порядка всё это называется)
const validator1 = createValidator(checkAge, checkPassword, checkTerms);
console.log(validator1(user));
