import React from "react";
import TodoListItem from "./ToDoListItem";

  
  const TodoList = ({todoList}) => (
     
    todoList.map(todo => (<TodoListItem key={todo.id} todo={todo}/>)
        )
    );

export default TodoList;