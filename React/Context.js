Контекст:
Если какому-то компоненту сделать контекст, то все дочерние компоненты могут к нему
обращаться без помощи проталкивания через props по всему дереву, это чаще используется
для смены оболочки темная/светлая, смены языков. Но с ней сложней будет, не замена props.
    В компоненте:
import React from "react";
const StoreContext = React.createContext(null); // null - пустой.
export default StoreContext;
    На пример в index.js или любом другом:
...
<BrowserRouter>
    <StoreContext.Provider value={store}> // store из импортов, который раньше передавали через props.
        <Profile />
    </StoreContext.Provider>
</BrowserRouter>...
Это означает, что внутри компонента Profile всем дочерним комп. будет доступен этот Контекст.
В каком-то дочернем компоненте пишем:
  return (
    <StoreContext.Consumer>
      {(store) => ( // получаем store.
        <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          post={state.profilePage.posts}
          newPostText={state.profilePage.newPostText}
        />
      )}
    </StoreContext.Consumer>