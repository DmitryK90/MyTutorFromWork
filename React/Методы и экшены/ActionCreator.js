На самом деле передавать объект события напрямую в dispatch() является признаком плохого тона.
Для этого нужно использовать функцию под названием actionCreator. Она делает ровно то что и
ожидается. Создаёт событие! Вызов этой функции нужно передавать как аргумент в dispatch, а
в actionCreator передавать необходимое значение (value). Базовый actionCreator выглядит
следующим образом:

function action_1(value) {
    return {
        type: ACTION_1,
        value_1: value
    };
}

export default action_1;

Таким образом вызов dispatch должен выглядеть так:

store.dispatch(action_1("Some value"));

С использованием actionCreator код становится более чистым.