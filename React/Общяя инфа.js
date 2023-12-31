Хранилище (store) — это объект, который:
    хранит состояние приложения;
    отображает состояние через getState();
    может обновлять состояние через dispatch();
    позволяет регистрироваться (или удаляться) в качестве слушателя изменения состояния через subscribe().

Функции хранилища
Получение состояния:
    store.getState()

Обновление состояния:
    store.dispatch(addItem('Something'))

Прослушивание изменений состояния:
    const unsubscribe = store.subscribe(() =>
      const newState = store.getState()
    )
    unsubscribe()

В Redux общее состояние приложения представлено одним объектом JavaScript — state (состояние)
или state tree (дерево состояний). Неизменяемое дерево состояний доступно только для чтения,
изменить ничего напрямую нельзя. Изменения возможны только при отправке action (действия).

Действие (action) — это JavaScript-объект, который лаконично описывает суть изменения:

{
  type: 'CLICKED_SIDEBAR'
}
// подробности об изменении
{
  type: 'SELECTED_USER',
  userId: 232
}

Единственное требование к объекту действия — это наличие свойства type, значением которого
обычно является строка.

---

Типы действий должны быть константами.
В простом приложении тип действия задаётся строкой. По мере разрастания функциональности приложения
лучше переходить на константы:

const ADD_ITEM = 'ADD_ITEM'
const action = { type: ADD_ITEM, title: 'Third item' }

и выносить действия в отдельные файлы. А затем их импортировать:

import { ADD_ITEM, REMOVE_ITEM } from './actions'

---

Генераторы действий (actions creators) — это функции, создающие действия.

function addItem(t) {
  return {
    type: ADD_ITEM,
    title: t
  }
}

Обычно инициируются вместе с функцией отправки действия:

dispatch(addItem('Milk')) // диспатчим результат ретёрна функции addItem, а не саму функцию.

Или при определении этой функции:

const dispatchAddItem = i => dispatch(addItem(i))
dispatchAddItem('Milk')

---

Редьюсеры.
При запуске действия обязательно что-то происходит и состояние приложения изменяется.
Это работа редьюсеров.

Что такое редьюсер:
Редьюсер (reducer) — это чистая функция, которая вычисляет следующее состояние дерева на
основании его предыдущего состояния и применяемого действия.

(currentState, action) => newState
Чистая функция работает независимо от состояния программы и выдаёт выходное значение, принимая
входное и не меняя ничего в нём и в остальной программе. Получается, что редьюсер возвращает
совершенно новый объект дерева состояний, которым заменяется предыдущий.

---------------------------------------------------------------------------------
Ключевые моменты Redux:
    Хранилище (store): хранит состояние приложения.
    Действия (actions): некоторый набор информации, который исходит от приложения к хранилищу и
который указывает, что именно нужно сделать. Для передачи этой информации у хранилища вызывается
метод dispatch().
    Создатели действий (action creators): функции, которые создают действия.
    Reducer : функция (или несколько функций), которая получает действие и в соответствии с этим
действием изменяет состояние хранилища.

Общую схему взаимодействия элементов архитектуры Redux можно выразить следующим образом:
    View => Dispatch => Action => Reducer => Store => View // и так по кругу.
Из View (то есть из компонентов React) мы посылаем действие, это действие получает функция reducer,
которая в соответствии с действием обновляет состояние хранилища. Затем компоненты React применяют
обновленное состояние из хранилища.


