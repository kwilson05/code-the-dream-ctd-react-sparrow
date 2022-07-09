import React from "react";
import propTypes from "prop-types";
import TodoListItem from "./ToDoListItem";

const TodoList = ({ todoList, onRemoveTodo }) =>
  todoList.map((todo) => (
    <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
  ));

TodoList.propTypes = {
  todoList: propTypes.array.isRequired,
  onRemoveTodo: propTypes.func.isRequired,
};

export default TodoList;
