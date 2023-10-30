    useState - это объект внутри компонента изменение которых приводит к перерисовке компонента
на странице. Главная задача state - перерисовка данных. В state прописывать данные изменения
которых должно влиять на перерисовку странцы.
    Как результат функции useState мы молучаем массив состоящий из двух элементов, где первый элемен
массива - это само состояние, второй - это функция которая позволяе изменять состояние:
export default function App() {
    const [todos, setTodos] = useState([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: false}
    ]) //в функцию useState передали массив, который будет являтся начальным знач. todos.
}


Пример:
Имеются insex.js и AddComment.js(компонент).
//-----
index.js:
import { createRoot } from "react-dom/client";
import AddComment1 from "./AddComment1";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <AddComment1 />
  </>
);

//-----
AddComment.js:
import React from "react";
import { useState } from "react";

function AddComment1() {
  const [comment, setComment] = useState([]);
  let myRef = React.createRef();

  let addComment = () => {
    let commentValue = myRef.current.value;
    let comments = [...comment, commentValue];
    setComment(comments);
    myRef.current.value = "";
  };

  return (
    <>
      <div>
        <textarea ref={myRef}></textarea>
      </div>
      <div>
        <button onClick={addComment}>Push</button>
      </div>
      <div>
        <ul>
          {comment.map((item, index) => (
            <li key={index.toString()}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default AddComment1;
//-----
//В этом приложении вводим коммент в поле textarea и при нажатии на кнопку добавляем
//этот коммент в список ниже.

