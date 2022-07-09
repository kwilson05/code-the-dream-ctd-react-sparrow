import propTypes from "prop-types";
const TodoListItem = ({ todo, onRemoveTodo }) => (
  <>
    <li>{todo.title}</li>
    <button
      type="button"
      onClick={() => {
        onRemoveTodo(todo.id);
      }}
    >
      Remove
    </button>
  </>
);

TodoListItem.propTypes = {
  todo: propTypes.object.isRequired,
  onRemoveTodo: propTypes.object.isRequired,
};

export default TodoListItem;
