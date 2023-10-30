React-Redux библиотека(npm install react-redux --save):
import { Provider } from "react-redux"; // в index.js.
Оборачиваем в provider:
<Provider store={store}>
    <App />
</Provider>

Это прослойка между компонентами и store(бизнес логикой), чтобы меньше возиться с
прокидываем props, и меньше возиться с контейнерными компонентами.

import { connect } from "react-redux";
По сути контейнерные компоненты создаём при помощи Connect:
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

Пример:
let mapStateToProps = (state) => { // тут будет state(props для Dialogs)
  return {
    dialogsPage: state.dialogsPage // это будет сам props.
  };
}; // они вернут объекты и достанут из state то что нужно.
let mapDispatchToProps = (dispatch) => { // тут будет dispatch-и.(callback-и)
  return {
    updateNewMessageBody: () => { // это будет сам props.
      dispatch(sendMessageCreator());
    },
    sendMessage: (body) => { // это будет сам props.
      dispatch(updateNewMessageBodyCreator(body));
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
// из библ. react-redux. Законекчивает Dialogs и store, чтобы снабнить Dialogs свойствами и callback.
// рендерит Dialogs и в качестве props передаёт в неё те свойства которые в
// mapStateToProps и mapDispatchToProps.(возвращает каждая по объекту)
// connect сам решает когда и чир перерисовывать интерфейс.

export default DialogsContainer;