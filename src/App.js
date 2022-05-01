import { useState} from 'react';
import TodoList from './TodoList';
import {useEffect} from "react";
import AddTodoForm from './AddTodoForm';


const useSemiPersistentState = ({key, initialValue})=> {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);

  useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(todoList))
  }, [todoList]);

  return [todoList, setTodoList];
}

const App = ()  => {

  const [todoList, setTodoList] = useSemiPersistentState({key: "savedTodoList", initialValue: []});
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
