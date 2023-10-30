Что бы обновить store необходимо вызвать метод dispatch(). Он вызывается у объекта store
который вы создаёте в store.js. Этот объект принято называть store поэтому обновление состояния
в моём случае выглядит так:

store.dispatch({ type: ACTION_1, value_1: "Some text" });

ACTION_1 это константа события о которой речь пойдет дальше (см. Actions).

Эта функция вызовет функцию reducer который обработает событие и обновит соответствующие поля хранилища.

---
Dispatch - применяет reducer к нашему состояни.