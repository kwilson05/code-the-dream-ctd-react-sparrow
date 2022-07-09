import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import { useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";

const App = () => {
  const LOCAL_STORAGE_KEY = "savedTodoList";
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch_url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`;
  useEffect(() => {
    fetch(fetch_url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const todoList = result.records.map((item) => ({
          id: item.id,
          title: item.fields.Title,
        }));

        setTodoList(todoList);
        setIsLoading(false);
      });
  }, [fetch_url]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };
  const removeItem = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList([...newTodoList]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <h1>{"Todo List"}</h1>

              <AddTodoForm onAddTodo={addTodo} />

              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeItem} />
              )}
            </>
          }
        ></Route>
        <Route path="/new" exact element={<h1>Kasozi is new</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
