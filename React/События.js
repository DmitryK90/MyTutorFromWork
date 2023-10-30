import './App.css';
import React from 'react';
import {useState} from 'react'; // подключили стейты.

function App() {
    let a = 5;
    let textInput = react.createRef(); // Ref для обращения к элементу на прямую.(сперва импорт.)
    let textOut = react.createRef(); // для вывода значения из input.
    const [output, setOutput] = useState('Hello'); // по умолч. 'Hello' влетит в output.
                                                   // setOutput - метод.

    function f1() {
        console.log('f1 work' + 5); // f1 work 5;
    }

    function f2() {
        console.log('move');
    }

    function f3(arg) {
        console.log('f1 work' + arg); // f1 work 5;
    }

    function showInput(event) {
        console.log('input');
        console.log(this.value); // ! в будущих уроках разбор.
        console.log(event.target.value); // работает.
        console.log(textInput.current.value); // работает. способ через Ref.(вместо querySel..)
        textOut.current.innerHTML = textInput.current.value; // в <p> записываем значение из Input.
        setOutput(textInput.current.value); // через state.
    }
    return(
        <>
            <h1>События</h1>
            <section>
                <h2>Button</h2>
                <button onClick={f1}>Push</button> // при клике запускаем функцию f1.
            </section>
            <section>
                <h2>Double click + mouse move</h2>
                <div className='test' onDoubleClick={f1}></div> // событие двойной клик.
                <div className='test' onDoubleClick={() => f3(2)}></div> // 2-аргумент передаём в функ.
                <div className='test' onMouseMove={f2}></div> // событие перемещение курсора по диву.
            </section>
            <section>
                <h2>Input</h2>
                <input type='text' onInput={showInput} ref={textInput} /> // прикрепили Ref.
                <p ref={textOut}></p> // сюда выводим значение из input.
                <h3>{output}</h3> // по умолч на странице будет выведен 'Hello'.
            </section>
        </>
    )
}

(Лущенко)