Замыкания - возможность внутренней функции получать доступ к переменных которые находятся в области видимости
родительской(или внешней) функции, даже после того как родительская функция завершила своё выполнение.
function one() {
    let a = 8;
    return a*12;
};
console.log(a); // выдаст ошибку, тк 'а' объявлена внутри функции и она локальна, не видна за пределами.
console.log(one());
//
let a = 8
function t1() { // Создали блок видимости в котором доступна внутренняя функция, которая видит внешнюю t1.
    let a = 0   //... по отношению к себе переменные 'а'.
    return function () { //внутренняя которая видит scope внешней, т.е. переменную 'а'.
        a = a + 1;
        return a;
    }
}
let b = t1();
console.log(b()); // 1
console.log(b()); // 2
//
function one(arg) {
    let i = 10;
    return function two(sui) {
        return arg + sui + i;
    }
}
let fin = one(2); // 2 подставляется в arg.
console.log(fin(2)); // 2 подставляется в sui. // 14
console.log(fin(5)); // 5 подставляется в sui. // 17

//--- ещё пример:
function createStep () {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}
let step1 = createStep(); // создался первый блок видимости.
let step2 = createStep(); // создался второй блок видимости.(не зависит от step1)
step1(); // 1
step1(); // 2
step1(); // 3
step2(); // 1

//--- ещё пример:
function createStep (n = 0) {
    let count = n;
    return function () {
        count++;
        console.log(count);
    }
}
let step1 = createStep();
let step2 = createStep(100);
step1(); // 1
step2(); // 101

//--- ещё пример:
(function (n = 0) {
    let p = 0;
    let q = document.querySelector('.btn');
    q.onclick = () => {
    p = p + 1;
    console.log('p');
    }
})() // выполняем функцию.(загружается при загрузке js. смотреть на скобки перед function и в конце)