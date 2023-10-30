Class (Наследование)

Синтаксис классов не вводит новую объектно-ориентированную модель, а предоставляет более простой и
понятный способ создания объектов и организации наследования.
Принято классы выносить в отдельный JS файл.

class Alert { // Создали класс, классы пишутся с большой буквы, так принято.
    constructor(a, c, d) { // Создаём метод с параметрами, может быть сколько угодно.
        this.messege = a; // Создаём свойство, могут быть любыми.
        this.cssClass = c; // Какой класс из CSS будет применён.
        this.out = d; // Куда будет происходить вывод(div, <p> и тд.)
    }
    showAlert() { // Название может быть любым.
        document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'>${this.messege}</p>`;
    } // Вывод.
}

class Alert2 extends Alert { // Создаём класс Alert2 который будет расширять возм. Alert.
    constructor(a, c, d, icon) {
        super(a, c, d) // Вызывает constructor родителя, т.е. Alert и передаёт в Alert2 его параметры.
                       //..по сути на данном этапе Alert2 копирует Alert, вместе с showAlert(), так же
                       //..showAlert() можно перезаписать код в Alert2.
        this.icon = icon; // Добавляем иконку(отличие от первого Alert.(подключается в HTML)
    }
    showIconAlert() {
         document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'>
         <i class='material-icons'>${this.icon}</i>${this.messege}</p>`;
    } // Вывод. На одной строке пишутся две строки выше.
    myAlert() {
        alert(this.messege); // Для примера, выведет в всплывающий Alert то что написано в парам. messege.
    }
}

let m = new Alert('My messege', 'test', '#out'); //1-подставится под параметр 'a'
                                                 //2-подставится под параметр 'c'(класс в css, без точки)
                                                 //3-подставится под параметр 'd'(куда вывод, id в HTML)
m.showAlert(); // Вызов метода showAlert().

let m2 = new Alert2('My messege', 'test', '#out', 'account_balance');
m2.showIconAlert(); // Вызов метода showIconAlert().
m2.myAlert(); // Dыведет в всплывающий Alert парам. внутри класса Alert2.
-----Мой-----
class My1 {
    constructor(name, saname) {
        this.name = name;
        this.saname = saname;
    }
    vivod() {
        document.querySelector('#out').innerHTML = `${this.name} ${this.saname}`;
    }
}
let init = new My1('Dim', 'Dimich');
init.vivod();

class My2 extends My1 {
    constructor(name, saname, otch) {
    super(name, saname)
        this.otch = otch;
    }
    vivod2() {
        document.querySelector('#out').innerHTML = `${this.name} ${this.saname} ${this.otch}`;
    }
}
let init2 = new My2('Dim1', 'Dimich1', 'Dimkovich')
init2.vivod2(); // Вывод, перезаписывает init.vivod();