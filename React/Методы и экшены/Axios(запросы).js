Axios - библиотека для запросов на сервер.

Устанавливаем в npm.
import * as axios from "axios";

Пример:
axios // через библиотеку axios делаем запрос на сервер со списком пользователей.
  .get("https://social-network.samuraijs.com/api/1.0/users")
  .then((response) => {
    props.setUsers();
  }); //https://social-network.samuraijs.com/docs#