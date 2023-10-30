===============Делегирование и события=================
event.target - это объект на котором было выполнено действие.
event.currentTarget - почти тоже что target, только показывает объект на который был повешен прослуш.
event.closest - возвращает ближайший родит. элемент.
event.target.dataset - получить доступ к атрибуту data.(в HTML пишем data-one, где data будет one)
event.which - какая кнопка нажата. 1-левая, 2-колесо, 3-правая.
---клавиатуры---
event.code - выведет код.
event.key - выведет, то что написано на клавиатуре.
---события загрузки страницы---
DOMContentLoaded - браузер полностью загрузил HTML, было построено DOM - дерево,
    но внешние ресурсы, такие как картинки <img>, могут быть ещё не загружены.
Load - Браузер загрузил HTML и внешние ресурсы.
beforeunload/unload - пользователь покидает страницу.

document.readyState - состояние загрузки.
Есть три возможных значения:
    loading - документ загружен.
    interactive - документ не полностью загружен.
    complete - документ был полностью прочитан и все ресурсы загружены.

Пример: document.addEventListener('DOMContentLoaded', myFunc) {}//конда стриница загружена.

Основные события мыши:
    mousedown/mouseup - кнопка мыши нажата/отпущена над элементом.
    mouseover/mouseout - курсор появляется над элем./уходит с него.
    mousemove - каждое движение мыши над элементом.
    contextmenu - вызывается при попытке открытия контекстного меню, как правило
        нажатие правой кнопки мыши.

Комплексные события мыши:
    click - клик.
    dbclick - вызывается двойным кликом на элемент.

События клавиатуры:
    keydown - происходит при нажатии клавиши.
    keyup - при отпускании клавиши.

const button = document.querySelectorAll('.button');
function showConsole() {
    console.log('Консоль');
}
button.forEach(buttonItem => {
    buttonItem.addEventListener('click', showConsole);
});//вторая часть - это пробегаемся по всем кнопкам и вешаем на них обработчик.
//---второй пример---
const lesson = document.querySelector('.lesson'); //div(родит.элем.) в котором лежат все кнопки.
function showConsole() {
    console.log('Консоль');
}
lesson.addEventListener('click', function(event) {
    if (event.target.closest('.button')) { //если то, на что кликнули является кнопкой, то выполняем код ниже.
    showConsole();
    }
});