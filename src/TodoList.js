import React from "react";
import TodoListItem from "./ToDoListItem";

const todoList = [{
    id: 1,
    title: "Laundry"
  },
  {
    id: 2,
    title: "Work out"
  },
  {
    id: 3,
    title: "Grocery Shopping"
  }];
  
   const TodoList = () => (
     
    todoList.map(todo => (<TodoListItem key={todo.id} todo={todo}/>)
        )
    );

export default TodoList;