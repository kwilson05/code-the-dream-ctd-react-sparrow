import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const TodoContainer = () => {
  const LOCAL_STORAGE_KEY = "savedTodoList";
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState("asc");
  const sortQueryParam = "sort[0][field]=Title";
  const sortDirectionParam = `sort[0][direction]=${sortDirection}`;
  const viewQueryParam = "view=Grid%20view";
  const base_airtable_url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

  useEffect(() => {
    fetch(
      `${base_airtable_url}?${viewQueryParam}&${sortQueryParam}&${sortDirectionParam}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const todoList = result.records.map((item) => ({
          id: item.id,
          title: item.fields.Title,
        }));

        setTodoList(todoList);
        setIsLoading(false);
      });
  }, [base_airtable_url, sortDirectionParam]);

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

  const changeSortDirection = () => {
    if (sortDirection === "asc") {
      setSortDirection("desc");
    } else {
      setSortDirection("asc");
    }
  };

  return (
    <>
      <h1>{"Todo List"}</h1>
      <div>
        <AddTodoForm onAddTodo={addTodo} />
        <nav>
          <button onClick={changeSortDirection} type="button">
            Sort
          </button>
        </nav>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeItem} />
      )}
    </>
  );
};

export default TodoContainer;
