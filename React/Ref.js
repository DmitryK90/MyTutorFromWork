Ref - создаёт ссылку на какой-либо элемент.

function...
let newPostElement = React.createRef();
let text = newPostElement.current.value; // current - ссылается на нативный html элемент.
далее в return:
<textarea ref={newPostElement}></textarea>
