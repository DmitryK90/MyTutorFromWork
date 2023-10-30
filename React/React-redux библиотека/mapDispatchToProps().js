Эта функция передаёт в компонент методы для обновления необходимого поля store. Что бы не
вызывать dispatch напрямую из компонента вы будете использовать данный метод для того что бы
передавать в props метод вызов которого приведёт к вызову dispatch и обновлению соответствующего поля.
Просто теперь это будет выглядеть более элегантно, а код более понятным и чистым.

К примеру компонент, номер один должен иметь возможность обновлять поле номер один из store.
Тогда mapDispatchToProps для него будет выглядеть следующим образом:

function (dispatch) {
    return {
        changeValue_1: bindActionCreators(action_1, dispatch)
    };
};

Теперь для обновления свойства value_1 вы будете вызывать changeValue_1() через
 this.props.changeValue_1(value). Не вызывая dispatch напрямую через
  this.props.store.dispatch(action_1(value)).

bindActionCreators следует импортировать из redux. Он позволяет оборачивать функцию dispatch и
actionCreator в единый объект. Вы можете не использовать bindActionCreators но тогда код будет
выглядеть избыточным. Вы должны старятся реализовать какую-либо функциональность так, чтобы код
выгладил просто и миниатюрно. Поэтому ничего лишнего писать не следует.

Только чистый и понятный код. Метод bindActionCreators(actionCreator, dispatch) принимает два
обязательных параметра это функцию actionCreator о которой мы уже говорили и dispatch. Возвращая
метод для изменения полей store.

Также как и для mapStateToProps я использую функцию генератор возвращающую функцию mapDispatchToProps
для каждого компонента:

import { bindActionCreators } from 'redux';
import action_1 from './actionCreators/action_1';
import action_2 from './actionCreators/action_2';

function mapDispatchToProps(component) {
    switch(component) {
        case "Component_1": return function(dispatch) {
            return {
                change_value_1: bindActionCreators(action_1, dispatch)
            };
        };
        case "Component_2": return function(dispatch) {
            return {
                change_value_2: bindActionCreators(action_2, dispatch)
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;