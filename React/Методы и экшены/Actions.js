actions это константы, описывающие событие. Обычно это просто строка с названием описывающее
событие. К примеру константа описывающее событие номер один будет выглядеть следующем образом:

const ACTION_1 = "ACTION_1";

export default ACTION_1;

Опять же в проекте вам стоит называть константы в соответствии с событием, которое она
описывает: onClick, createUserSesion, deleteItem, addItem и т.д. Главное, чтобы было понятно.
Замете что я нигде не писал import поэтому не забудьте импортировать ваши константы перед их
использованием. Потому что константы тоже принято разбивать на отдельные файлы храня их в
специальной папке. Хотя некоторые хранят их в одном файле под названием actionTypes.js.
Такое решение нельзя назвать не правильным, но и не идеальным.