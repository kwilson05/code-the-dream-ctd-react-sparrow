import { useState } from "react";
import TodoList from "./TodoList";
import { useEffect } from "react";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const LOCAL_STORAGE_KEY = "savedTodoList";
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    new Promise((resolve, reject) => {
      return setTimeout(
        () =>
          resolve({
            data: {
              todoList:
                JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
            },
          }),
        5000
      );
    }).then((result) => {
      console.log(result);
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    }
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };
  const removeItem = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...newTodoList]);
  };

  return (
    <>
      <header>
        <h1>{"Todo List"}</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeItem} />
      )}
    </>
  );
};

export default App;
