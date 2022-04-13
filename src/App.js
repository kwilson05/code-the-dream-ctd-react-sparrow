import { useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = ()  => {
  const [todoList, setTodoList] = useState([]);

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
