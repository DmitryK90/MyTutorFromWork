let div_p = document.querySelector('.page'); // берем в переменную div с классом page
        //-куда надо вставить новый div или другой элемент.
function myFunc() {
    let newElem = document.createElement('div'); // указываем тег который создаёт типо <div>, <input> тд.
        newElem.className = 'main_block'; // присваиваем класс, для CSS стилей.
        newElem.innerHTML = 'Название'; // добавляем текст в блоке, если нужен.
    div_p.append(newElem); // вставляем newElem внутрь переенной div_p в конец блока,т.е. в div с классом page.
      // ИЛИ
    document.body.prepend(newElem); // вставляет созданный блок в блок body.(prepend ставка в начале блока).
      // ИЛИ
    document.querySelector('.page').appendChild(newElem); // так можно ещё вроде.
    };

/*-----вывод елементов-----*/
    const textElementContent = newElem.textContent; // выводит текст(значения) из newElem.

/*-----создание елементов-----*/
    const newElem = document.createElement('div'); указываем тег который создаёт типо <div>.
    const newText = document.createTextNode('Привет!'); для создания узла текста.
    newElem.innerHTML = 'Название'; // добавляем текст в блоке, если нужен.

/*-----вставка елементов в документ-----*/
    main_div.before(newElem); // вставка newElem перед объектом main_div.
    main_div.after(newElem); // вставка newElem после объекта main_div.
    main_div.prepend(newElem); // вставка newElem внутрь в объект main_div в начале.
    main_div.append(newElem); // вставка newElem в объект main_div в конце.
    main_div.append(newElem, 'Привет'); // через запятую можно вставлять сразу несколько элем.
    main_div.insertAdjacentHTML(
        'afterend', //вставляем html после main_div.
        '<p>Привет!<!p>'
    );
        'beforebegin' - вставляем html перед main_div.
        'afterbegin' - вставить html в начало main_div.
        'beforeend' - вставить html в конец main_div.
    const cloneNewElem = newElem.cloneNode(true); //клонирование newElem,если убрать
        //-из скобок 'true' то клонирование без дочерних элем.

/*-----управление классами-----*/
    newElem.className = 'newElem_class'; // присваиваем класс, для CSS стилей.

    newElem.classList.add('newElem_class'); - добавить класс.
    newElem.classList.remove('newElem_class'); - удалить класс.
    newElem.classList.toggle('newElem_class'); - добавить или есть, если нет - удалить.
    newElem.classList.contains('newElem_class'); - проверка класса, возвращает true/false.

/*-----управление стилями-----*/
    newElem.style.color = 'red'; // меняет цвет и тд.(пишется по другому чем в CSS, а именно)
        //-через lowerCamelCase, пример - marginBottom пишется так.

    newElem.style.cssText = '
        margin-bottom: 30px;
        color: red;
        '; // можно записывать в привычном формате CSS так.

    const newElemStyle = getComputedStyle(newElem); получаем вычесленный список стилей элемента.
    consol.log...

    const newElemBeforeStyle = getComputedStyle(newElem, '::before'); вычесл. список псевдоэлем. before.
    consol.log...

/*-----разное-----*/
    console.log(input.value); // вывод в консоль значение в поле переменной input.
    console.dir(input.value); // список со всеми свойствами элемента.

    const input = document.querySelector('.input_01'); // находил по классу нужный input.
    input.setAttribute('id', '1'); // приставиваем аттрибут id = 1.
    console.log(input.id); // выводим.

    input.id = '2'; - можно поменять id.
    ЛУЧШЕ ИСПОЛЬЗОВАТЬ АТТРИБУТ - data.
    В HTML писать <div ... data-size='1'...>
    console.log(newElem.dataset.size); // выводим значение.(префикс data и имя - size)
    newElem.dataset.size = '2'; // можно перезаписать значение.
/*-----рабочее-----*/
    let i = 1; // ПЕРЕД функцией создаём перем i для увелич id.
    function myFuncTest() {
    let newElem = document.createElement('div'); // Создали форму(div) для трубки.

    let newInp = document.createElement('input'); // создали <input>.
        newInp.className = 'input_01';
        newInp.setAttribute('id', 'tr_' + i); // id будет увелич. на значение i при каждом клике.

    div_p.append(newElem); // добавляем в div_p новый newElem.
    newElem.append(newInp); // добавляем input(newInp) в созданный див newElem.
    i++; // увеличиваем переменную i на 1.
    }


    const test_01 = document.getElementById('tr_1').value; // взяли значение из созданного рарее
        //-атрибута id = tr_2.
    p_class_01.innerHTML = test_01; // записали в <p> значение переменной test_01.
}
