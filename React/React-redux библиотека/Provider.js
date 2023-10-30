Для использование store в компоненте вам необходимо передавать его в пропсы:

ReactDOM.render(<Main store={store} />, document.getElementById('root'));

И после использовать в компоненте: this.props.state. Для этого react-redux предостовляет метод Provider:

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
document.getElementById('root'));

Таким образом метод connect сможет использовать store. В противном случае вы получите ошибку:
Error: Could not find «store» in the context of «Connect(Main)». Either wrap the root component in a ,
or pass a custom React context provider to and the corresponding React context consumer to
Connect(Main) in connect options.

Также можно передать store напрямую в компонент, не оборачивая его в Provider и это будет работать.
Но лучше всё-таки используйте Provider.