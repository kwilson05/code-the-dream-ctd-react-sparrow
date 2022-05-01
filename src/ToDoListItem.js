

const TodoListItem = ({todo, onRemoveTodo}) => (
    <>
    <li>{todo.title}</li>   
    <button type="button" onClick={() => {onRemoveTodo(todo.id)}}>Remove</button>
    </>
);

export default TodoListItem;