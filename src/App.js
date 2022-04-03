import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


const App = ()  =>  (
    <div>
      <header>
          <h1>
            {"Todo List"}
          </h1>
      </header>
        <AddTodoForm />
        <TodoList />
    </div>
  );


export default App;
