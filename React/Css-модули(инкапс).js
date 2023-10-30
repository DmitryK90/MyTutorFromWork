css-модули:
Все css файлы проекта по итогу попадают в один глобальный css файл.
Чтобы работала инкапсуляция(каждый css был внутри компонента) надо в названии файла
добавить .module, пример: Navbar.module.css.
В итоге в финальном HTML к классам добавляются префиксы(по названию компонента = .Navbar)
и добавилось постфиксы(рандомное значение = __3qaF3)пример: .Navbar_item_3qaF3 {}

Подробный пример:
Имеется Navbar.jsx и Navbar.module.css
В Navbar.jsx:
import classes from './Navbar.module.css'; // classes - объект, назв любое, пример вконце.
const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <a className={classes.item} href="">
          Profile
        </a>
      </div>
    </nav>
  );
}
export default Navbar;

В Navbar.module.css:
.nav {
  grid-area: n;
  background-color: burlywood;
}
.item {
  color: white;
}
---
Пример:
let classes = {
    'nav': '',
    'item': ''
} // для понимания пример.
---
Если надо два класса добавить, то:
<div className={`${classes.item} ${classes.active}`}>;
в css должно быть два класса: .item и .active.
