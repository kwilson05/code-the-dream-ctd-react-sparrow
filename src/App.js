import { useState} from 'react';
import TodoList from './TodoList';
import {useEffect} from "react";
import AddTodoForm from './AddTodoForm';




const App = ()  => {

  const LOCAL_STORAGE_KEY = "savedTodoList";
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
    useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList]);

  const addTodo = (newTodo) =>{
    setTodoList([newTodo, ...todoList])
  }
  const removeItem = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id)
    setTodoList([...newTodoList])
  }

  return (
    <>
      <header>
          <h1>
            {"Todo List"}
          </h1>
      </header>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList} onRemoveTodo={removeItem} />
    </>
  );
  }

export default App;
