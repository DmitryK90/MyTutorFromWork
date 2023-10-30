Fetch, XMLHttpRequest, AJAX.
-----
    AJAX (Asynchronous JavaScript and XML — асинхронный JavaScript и XML)
Асинфронный JS и xml. Это методы которые позволяют в фоновом режиме послать запрос на серверус помощью JS и
получить ответ.
-это не технология сама по себе, а термин, который описывает «новый» подход к использованию существующих
технологий вместе. AJAX включает: HTML или XHTML, CSS, JavaScript, DOM, XML, XSLT, и объект XMLHttpRequest.
Когда эти технологии объединяются в модель AJAX, web-приложения способны делать быстрые дополняющие
обновления интерфейса пользователя без необходимости полнойперезагрузки страницы браузером. Приложения
работают быстрее и становятся более отзывчивыми к действиям пользователей.
-----
    GET
HTTP-метод GET запрашивает представление указанного ресурса. GET-запросы должны только получать данные.
HTTP метод, способ обращения к серверу в котором мы передаём информацию через адресную строку, get -
запросы должны получать только данные, не подходит для передачи данных типо логина и пароля, тк будет
видно в адресной строке. Так как мы передаём данные через адресную строку, то длина её ограничена, и мы
не можем передать большой объём данных.
-----
    POST
HTTP-метод POST предназначен для отправки данных на сервер. Тип тела запроса указывается в
заголовке Content-Type. Имеет body(тело).
HTTP метод, он не дублирует информацию в адресной строке, посылается скрыто. Можно передавать
большие объёмы данных.
-----
    XMLHttpRequest
Это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером.
-----
    Fetch
Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP. Он также
предоставляет глобальный метод fetch() (en-US), который позволяет легко и логично получать ресурсы
по сети асинхронно. Лучшая альтернатива более устаревшего XMLHttpRequest.
-----
(jsonplaceholder - сайт для тестов, фейк онлайн api.(Минин)
Программа PostMan для api.

-------------------------------------------------------------------------------------------------
 'GET'
auth=zjhdj7hhf21jhd
ДЛЯ GET запросов:
let xhttp = new XMLHttpRequest(); // создали новый объект, который может посылать запросы на разл.ресурсы.
xhttp.onreadystatechange = function() { // когда будет меняться состояние этого объетка вызывать функцию.
    if (this.readyState == 4 && this.status == 200) { // .readyState - состояние запроса, см. ниже.
        myFunction (this.responseText);//this - обращение к самому объекту xhttp.
                                       //responseText - Ответ на запрос в виде строки или null в случае-
                                       //-если запрос не успешен или ответ ещё не получен.
    }; // проверка на получение данных:
xhttp.open('GET', 'http://123.html', true);// .opem - запускает сам запрос.
xhttp.send();                              // первый параметр - способ отправки GET,
                                           // второй - куда HTTP://123.html.
                                           // третий - не обяз. это синхронно или асинхр.
function myFunction(data) { // принимаем какой-то параметр data.
    console.log(data);
};
                            //.readyState:
                            // 0 - UNSENT. метод еще не вызван.
                            // 1 - OPENED. метод вызван, в этом сост.можно добавить заголовки.
                            // 2 - HEADERS_RECEIVED. получены заголовки и код.
                            // 3 - LOADING. Загрузка, содержит частичные данные.
                            // 4 - DONE. Операция завершена. Все данные получены.
       // так же проверяем статус:
                            // Статус ответа на запрос. Равен кодам HTTP (200 - успешно, 404 не найдено,
                            // 301 - перенесено навсегда).
};
---Минин---
const requestURL = 'адрес с сайта jsonplaceholder для теста';
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL); //вызываем метод open() для открытия нового соединения. Первым парам. надо передать метод
                            //...по которому будет делать запрос(get/post/ и тд). Вторым парам. передаём url.
xhr.responseType = 'json'; // переводим ответ от сервера string в json формат.
xhr.onload = () => {
    if (xhr.status >= 400) { // проверка на авторизацию и тд.
        console.error(xhr.response);
    } else {
        console.log(xhr.response);
    }
    console.log(xhr.response); // выводим в консоль ответ от сервера.
}
xhr.onerror = () => {          // Обрабатывает ошибки.(только ошибки связанные с сетью и передачей данных)
    console.log(xhr.response); // если успешный ответ т сервера - попадаем в onload, ошибка в - onerror.
}
xhr.sent(); // отправляем.(во вкладке Network можно поглядеть, в браузере.
-----
Метод GET. Делаем более красиво с помощью promise:
function sendRequest(method, url) { // принимаем 2 парам.(назв. любое)
return new Prosime((resolve, reject) => { // получаем внутрь две функции.
    const requestURL = 'адрес с сайта jsonplaceholder для теста';
    const xhr = new XMLHttpRequest();
    xhr.open(method, url); // передаём динамич.парам method и url из парам выше.
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status >= 400) {
            reject(xhr.response);
        } else {
            resolve(xhr.response);
        }
        console.log(xhr.response);
    }
    xhr.onerror = () => {
        reject(xhr.response);
    }
    xhr.sent();
    }
});
// Метод Resolve - вызываем когда у нас есть успех. reject - когда есть ошибка.
sendRequest('GET', requestURL); // этот метод вызывает promise.
    .then(data => console.log(data));
    .catch(err => console.log(err));
-------------------------------------------------------------------------------------------------
 'POST'
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2 (this.responseText);
    };
};

xhttp2.open('POST', 'http://123.html', true);// .open - запускает сам запрос.
xhttp2.setRequestHeader('Content-type', 'applycation/x-www-form-urlencoded');
xhttp2.send('auth=zjhdj7hhf21jhd&action=1'); // отправляет ключ и action 1. 2 параметра.

function myFunction2(data) {
    console.log(data);
};

---Минин---
Метод POST. В отличии от GET поидее должен принимать дополнительные парам. типа body.
function sendRequest(method, url, body = null) { // вводим body и по умолч = null.
return new Prosime((resolve, reject) => { // получаем внутрь две функции.
    const requestURL = 'адрес с сайта jsonplaceholder для теста';
    const xhr = new XMLHttpRequest();
    xhr.open(method, url); // передаём динамич.парам method и url из парам выше.
    xhr.responseType = 'json';
    xhr.setRequestHeader('Contect-Type', 'application/json'); // первый парам - назв.хедера. Второе - значение.
    xhr.onload = () => {
        if (xhr.status >= 400) {
            reject(xhr.response);
        } else {
            resolve(xhr.response);
        }
        console.log(xhr.response);
    }
    xhr.onerror = () => {
        reject(xhr.response);
    }
    xhr.sent(JSON.stringify(body)); // JSON.stringif - преобразуем из строки в объект.
    }
});
const body = { // body - это объект.
    name: 'Dmitry',
    age: 33
};
sendRequest('POST', requestURL, body); // этот метод вызывает promise.
    .then(data => console.log(data));
    .catch(err => console.log(err));

-------------------------------------------------------------------------------------------------
 'Fetch' Минин
 -----
'GET'
const requestURL = 'адрес с сайта jsonplaceholder для теста';
function sendRequest(method, url, body = null) { // вводим body и по умолч = null.
                                                 //...первым парам принимает url, ост. не обяз.
    return fetch(url).then(response => { // возвращает promise, поэтому можно сразу
                                         //..написать return. По умолч. метов GET.
        return.response.json(); // получаем массив данных с сервера.
    });
};
sendRequest('GET', requestURL); // этот метод вызывает promise.
    .then(data => console.log(data));
    .catch(err => console.log(err));
const body = { // body - это объект.
    name: 'Dmitry',
    age: 33
};
-----
'POST'
function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    };
    return fetch(url,{  //вводим дополн объект конфигурации {}.
        method: method,
        body: JSON.stringify(body),
        headers: headers // ключ.
    }).then(response => {
        if (response.ok) { //проверка на ошибки по полю ok.
            return.response.json();
        } else {
        return.response.json().then(error => {
            const e = new Error('Ошибка');
            e.data = error;
            throw e;
        });
        };
    });
};
const body = { // body - это объект.
    name: 'Dmitry',
    age: 33
};
sendRequest('POST', requestURL, body); // этот метод вызывает promise.
    .then(data => console.log(data));
    .catch(err => console.log(err));

---Fetch---(пример два)
Fetch API предоставляет интерфейс для получения ресурсов.

fetch('http://123.html')
    .then(data => { //.then - функция будет выполнена когда запрос обраб.
        console.log(data);
        return data.text();
    });
    .then (data => {
        console.log(data);
    });
Еще пример Лущенко:
Асинхронная функция ВСЕГДА возвращает ПРОМИС!
async function getWeather() {
    let a = await fetch(`${param.url}weather?id=${param['cityId']}&units=metric$APPID=${param.appid}`)
    const result = await a.json(); // await - ждём перевода в json.
}
getWeather();