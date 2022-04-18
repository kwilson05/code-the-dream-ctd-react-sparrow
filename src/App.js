import { useState} from 'react';
import TodoList from './TodoList';
import {useEffect} from "react";
import AddTodoForm from './AddTodoForm';




const App = ()  => {
  
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("saveTodoList")) || []);

  useEffect(()=> {
    localStorage.setItem("saveTodoList", JSON.stringify(todoList))
  }, [todoList]);

  const addTodo = (newTodo) =>{
    setTodoList([newTodo, ...todoList])
  }

  return (
    <div>
      <header>
          <h1>
            {"Todo List"}
          </h1>
      </header>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList} />
    </div>
  );
  }

export default App;
