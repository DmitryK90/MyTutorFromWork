Чтобы установить модуль маршрутизации, надо в терминале прописать:
npm i react-router-dom -save // -save - внести запись в package.json чтобы на гите работало.

Импорт обычно в App.js.
import { Route } from "react-router-dom";

Пример:
export default function App() {
  return (
    <BrowserRouter> // все взять в этот тег чтобы работала маршрутизация.
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes> // обернуть все Route иначе ошибка.
            <Route path="/massages" element={<Dialogs />} /> // меняем div на комп. Dialogs
            <Route path="/profile" element={<Profile />} /> // меняем div на комп. Profile
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
Дополнение:
Route - основная задача следить за адресной строкой. И как только она увидит, чтоб
её path совпадает с адресной строкой, то запускает отрисовку. Как только адресная
строка меняется, он сразу уничтожает отрисованный интерфейс.(Не путать с NavLink)
<Route path="/massages" element={<Dialogs dialogs={dialogs} />} /> // dialogs={dialogs} - так передаём props.
Важно:
...
    <Route exact path="/massages" element={<Dialogs />} /> // exact - точное совпадение адреса.
...
Пример(более старый до последних обновлений):
<Route path="/profile" render={() => <Profile />} />
И ещё один пример:
let SomeComponent = () => <Dialogs />;
function...
<Route path="/massages" render={SomeComponent} />

themeforest - сайт с дизайнами.
-----
const Profile = () => {
  let posts = [
    { id: "1", messege: "Hi, how are you?", likesCount: 12 },
    { id: "2", messege: "Its my first post", likesCount: 9 }
  ];
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} /> // передаём далее массив posts в компонент ниже MyPosts.
    </div>
  );
};
export default Profile;

const MyPosts = (props) => { // props = posts из компонента выше.
  let postsElements = props.posts.map((p) => (
    <Post massege={p.messege} likesCount={p.likesCount} />
  ));