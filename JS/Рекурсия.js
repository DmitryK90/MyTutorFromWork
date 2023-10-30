Рекурсия - это процесс, когда функция вызывает сама себя, пока не будет достигнуто условие
выхода из функция.
//
let t = 0;
function f1() {
    t++;
    console.log(t);
    if(t == 100) return;
    f1();
}
f1();
//
Пример через цикл.
function f2() {
    let out = '';
    for (let i=1; i<=200; i++){
    out += i + ' ';
    }
    console.log(out);
}
f2();
//
Переписываем тоже через рекурсию.
let i = 0;
let outf = '';
function f3() {
    i++;
    outf += i + ' ';
    if (i >=30) return;
    f3();
}
f3();
console.log(outf);
//
----------------------
function one(arg) {
    console.log(arg);
    if(arg > 0) {
        one(arg-1);
    };
};
one(10);

// тоже самое через цикл.
function two() {
    let out = '';
    for (let i=10; i>=0; i--){
        out += i + '_';
    }
    console.log(out);
}
two();
