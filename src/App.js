import { useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = ()  => {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <header>
          <h1>
            {"Todo List"}
          </h1>
      </header>
        <AddTodoForm onAddTodo={setNewTodo}/>
        <p>{newTodo}</p>
        <TodoList />
    </div>
  );
  }

export default App;
