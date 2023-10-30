Ну и теперь кульминация! То без чего всё это не будет работать. Это функция connect.
Именно она связывает mapStateToProps и mapDispatchToProps с компонентом и передает необходимые поля
и методы в него. Возвращает она новый компонент-обёртку для вашего компонента. Как правильно именовать
такой компонент я не знаю, ибо в самой документации React-redux это не описывается. Лично я добавляю
окончание _w для компонентов оберток. Как бы _w = wrap Component. Подключение компонента в этм случае
выглядит так:

const COMPONENT_1_W = connect(mapStateToProps("Component_1"), mapDispatchToProps("Component_1"))(Component_1);

И теперь в ReactDOM.render() вы передаёте не ваш компонент, а тот что возвращает функция connect.

Если же у компонента нет необходимости в передаче ему mapStateToProps или mapDispatchToProps передавайте
 undefined или null в него.

 https://habr.com/ru/articles/498860/

 ------

 https://habr.com/ru/companies/ruvds/articles/423157/ :
Connect - используется для создания компоненов-контейнеров, которые подключены к хранилищу Redux.

Анатомия connect():
Функция connect(), предоставляемая пакетом react-redux, может принимать до четырёх аргументов, каждый
из которых является необязательным. После вызова функции connect() возвращается компонент высшего
порядка, который можно использовать для оборачивания любого компонента React.
Так как функция возвращает компонент высшего порядка, её нужно вызвать повторно, передав базовый
компонент React, для того, чтобы конвертировать его в компонент-контейнер:
Вот сигнатура функции connect():

    connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

 ---
Аргумент mapStateToProps является функцией, которая возвращает либо обычный объект, либо другую функцию.
Передача этого аргумента connect() приводит к подписке компонента-контейнера на обновления хранилища
Redux. Это означает, что функция mapStateToProps будет вызываться каждый раз, когда состояние
хранилища изменяется. Если вам слежение за обновлениями состояния не интересно, передайте connect()
в качестве значения этого аргумента undefined или null.

Функция mapStateToProps объявляется с двумя параметрами, второй из которых является необязательным.
Первый параметр представляет собой текущее состояние хранилища Redux. Второй параметр, если его
передают, представляет собой объект свойств, переданных компоненту:

    const mapStateToProps = function(state) {
      return {
        profile: state.user.profile,
        loggedIn: state.auth.loggedIn
      }
    }

    export default connect(mapStateToProps)(ProfileComponent);

Если из mapStateToProps будет возвращён обычный объект, то возвращённый объект stateProps
объединяется со свойствами компонента. Получить доступ к этим свойствам в компоненте можно так:

    function ProfileComponent(props) {
      return (
        props.loggedIn
          ? <Profile profile={props.profile} />
          : <div>Please login to view profile.</div>
      )
    }

Если же mapStateToProps возвращает функцию, то эта функция используется как mapStateToProps для
каждого экземпляра компонента. Это может пригодиться для улучшения производительности рендеринга
и для мемоизации.
---
Аргумент mapDispatchToProps может быть либо объектом, либо функцией, которая возвращает либо обычный
объект, либо другую функцию. Для того чтобы лучше проиллюстрировать работу mapDispatchToProps,
нам понадобятся генераторы действий. Предположим, у нас имеются следующие генераторы:

    export const writeComment = (comment) => ({
      comment,
      type: 'WRITE_COMMENT'
    });

    export const updateComment = (id, comment) => ({
      id,
      comment,
      type: 'UPDATE_COMMENT'
    });

    export const deleteComment = (id) => ({
      id,
      type: 'DELETE_COMMENT'
    });

---

Теперь рассмотрим различные варианты использования mapDispatchToProps:

Стандартная реализация, используемая по умолчанию
Если вы не используете собственную реализацию mapDispatchToProps, представленную объектом или
функцией, будет использована стандартная реализация, при применении которой осуществляется внедрение
метода хранилища dispatch() в качестве свойства для компонента. Пользоваться этим свойством в
компоненте можно так:

    import React from 'react';
    import { connect } from 'react-redux';
    import { updateComment, deleteComment } from './actions';

    function Comment(props) {
      const { id, content } = props.comment;

      // Вызов действий через props.dispatch()
      const editComment = () => props.dispatch(updateComment(id, content));
      const removeComment = () => props.dispatch(deleteComment(id));

      return (
        <div>
          <p>{ content }</p>
          <button type="button" onClick={editComment}>Edit Comment</button>
          <button type="button" onClick={removeComment}>Remove Comment</button>
        </div>
      )
    }

    export default connect()(Comment);

---

Передача объекта

Если в качестве аргумента mapDispatchToProps используется объект, то каждая функция в объекте
будет воспринята в качестве генератора действий Redux и обёрнута в вызов метода хранилища dispatch(),
что позволит вызывать его напрямую. Получившийся в результате объект с генераторами действий,
dispatchProps, будет объединён со свойствами компонента.

В следующем примере показан пример конструирования аргумента mapDispatchToProps, представляющего
собой объект с генераторами действий, а так же то, как генераторы могут быть использованы в виде
свойств компонента React:

    import React from 'react';
    import { connect } from 'react-redux';
    import { updateComment, deleteComment } from './actions';

    function Comment(props) {
      const { id, content } = props.comment;

      // Действия, представленные свойствами компонента, вызываются напрямую
      const editComment = () => props.updatePostComment(id, content);
      const removeComment = () => props.deletePostComment(id);

      return (
        <div>
          <p>{ content }</p>
          <button type="button" onClick={editComment}>Edit Comment</button>
          <button type="button" onClick={removeComment}>Remove Comment</button>
        </div>
      )
    }

    // Объект с генераторами действий
    const mapDispatchToProps = {
      updatePostComment: updateComment,
      deletePostComment: deleteComment
    }

    export default connect(null, mapDispatchToProps)(Comment);

---

