/*-----Корень переменной 'r'-----
let cor = Math.sqrt(r);
*/
/*-----Округляем число из переменной до десяток(2-до соток)-----
...innerHTML =cor.toFixed(1);
*/
/*-----Блокирует ввод точек(десятых) в числах поля input_id01-----
const reg = /[^0-9]/,
        input = document.querySelector('#input_id01'); //выбираем по id (input_id01)
        input.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(reg, '') //если число не целое - перезагружает поле
        })
*/
/*-----Разрешает вводить числа только в заданном диапазоне(диап. задаётся в HTML(min='' max=''),
если число не попадает в диапазон значение скидывается на пустое поле-----
    const inputs = document.querySelectorAll('input[type=number]');
    Array.from(inputs).forEach(input => {
        const min = +input.min; //+ - означает что это конст число, а не текст.
        const max = +input.max;
        input.addEventListener('input', (e) => {
            const value = +input.value;
            if (value > max) { input.value = ''}
            else if (value < min) { input.value = ''}
        })
    })
*/
-------------
МАССИВЫ:
let a = ['Иван', 25,  'Рыбы']; /* Иван - значение массива, чтобы к нему обратиться используется index - это
порядковый номер в массиве, начинается с 0.*/
console.log(a[1]); //выведет в консоль - Иван.
console.log(a);// выводить весь массив.
console.log(a.length); // выводит клину массива.
Добавление в массив:
    arr.push(3);
    arr[i] = 3;

-----
Проверка точек radio на чеккед и вывод в консоль.
function func1 () {
//    let qw = document.getElementsByName('1');
    let qw = document.querySelectorAll('input[type=radio]')
    for (let i = 0; i < qw.length; i++) {
        if (qw[i].checked) {
            console.log(qw[i].value);
        }
    }
}
//через while:
function func1 () {
let pu = 0;
    while (pu < qw.length) {
        if (qw[pu].checked) {
            console.log(qw[pu].value);
        }
        pu++;
    }
}

------------------СОБЫТИЯ------------------
onchange есть ещё(когда инпут потеряет фокус)
oninput(при любом изменении)
onkeypress(событие которое происходит когда клавиша клав. нажата, событие срабатывает когда клавиша отпущена)
onkeydown(событие когда клавиша нажата, но ещё не отпущена, в нём винды стрелки, капс и тд)
onkeyup()

------------------Try Catch------------------
Try Catch, ловит ошибки.
try {
    document.querySelector('.test').innerHTML = a; // сюда пеместить то что проверяем
}; // если ошибка, то переходим к catch
catch (err) { // любая переменная куда будет записываться ошибка, сюда.
    console.log('Ошибка');
};
finally { // не обязательный, выполнится вне зависимости была ошибка или нет.
    console.log('123');
};