Redux - предоставляет возможность создать store.
Пример:
import store from './redux/redux-store'; // в index.
В самом файле redux-store.js:
import {CombineReducers, createStore} from 'redux';

let reducers = combineReducers({
    ...редьюсеры
})
let store = CreateStore(reducers); // создали сам store.
export default store;

-----
