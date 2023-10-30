Promise
Объект Promise используется для отложенных и асинхронных вычислений. Вместо конечного результата
асинхронного метода возвращается своего рода обещание (дословный перевод слова "промис")
получить результат в некоторый момент в будущем.
.then - (когда) Когда код выше исполнен выполняется .then...(возвращает promis)
.catch - Вызывается когда не выполнено или ошибка.(возвращает promis)
Описание(https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise)
Тест API(sampleapis.com)

Простой пример из MDN:
const myFirstPromise = new Promise((resolve, reject) => {
  // выполняется асинхронная операция, которая в итоге вызовет:
  //
  //   resolve(someValue); // успешное завершение
  // или
  //   reject("failure reason"); // неудача
});
-----

let a = new Promise ((resolve, reject) => { //создаём promise с двумя функциями(назв любые).
    fetch ('http://....')
    .then(data => {
        resolve(data.text()); //преобразуем сырые данные в текст.
    });
});

let b = new Promise ((resolve, reject) => { //создаём promise с двумя параметрами(назв любые).
    fetch ('http://....')
    .then(data => {
        resolve(data.text()); //преобразуем сырые данные в текст.
    });
});

Promise.all([a,b]).then(data => {
    console.log(data);
}); // Promise.all дождётся обработки двух промисов и потом запустит обработку.
//.. и выведет результат в массив в том порядке в котором указано.

//resolve - возвращает результат если все ОК, все завершено успешно.
//reject - если имеются какие-то ошибки.
----------Примеры Муравьев----------
пример 1:
const listPromise = fetch('https://api.sampleapis.com/1countries/countries'); // делаем запрос и получаем
                            //..promise с списком стран.(url - это файл в json формате который состоит
                            //..из объектов).
listPromise
    .then(data => data.json()) // Указываем, что получаем данные в формате json.
    .then(countries => countries) // функция запускается когда приходят наши данных с сервера.
    .catch(err => {               // Отлавливает ошибки.
        console.log('Ошибка', err)
    });
----------
пример 2:
const coffee = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Готово 2')
    },1500)
});
coffee.then(data => {
    console.log(data)
})
----------
пример 3:
const makeCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Кофе готов')
        }, 500)
    })
}
const makeToast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Тосты готовы')
        }, 2500)
    })
}

const coffeePromise = makeCoffee();
const toastPromise = makeToast();

Promise.all([coffeePromise, toastPromise]) // Promise.all - дожидается пока обработаются оба промиса,
                                           //..и по порядку выводит.
    .then(([coffeePromise, toastPromise]) => {
        console.log(coffeePromise, toastPromise)
    })
----------
//пример 4:
const beersPromise = fetch('https://api.sampleapis.com/beers/ale')
const winesPromise = fetch('https://api.sampleapis.com/wines/reds')

Promise.all([beersPromise, winesPromise])
    .then(data => Promise.all(data.map(res => res.json()))) //пробегаемся map и получаем данные в json.
    .then(finalData => {
        console.log(finalData)
    }) // получаем два массива в консоле.
----------
