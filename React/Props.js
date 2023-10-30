Props - параметр.
Пример:
<Header name='Dima' age='33' /> // это тоже что и объект ниже:
let obj = {
    name: 'Dima',
    age: 33
} // а в компоненте пишем:
const Header = (props) => {
    return(
        <div>
            <span>{props.name}, {props.age}</span>
        </div>
    )
}

НЕ ПОЛНОСТЬЮ РАСКРЫТО!!!