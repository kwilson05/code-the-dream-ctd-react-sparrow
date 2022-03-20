import React from 'react';

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

function App() {
  return (
    <div>
      <header>
        <h1>
          {"Todo List"}
        </h1>
      </header>
      <ul>
      {todoList.map(todo => (<li key={todoList.id}>
        {todo.title}</li>))}
      </ul>
    </div>
  );
}

export default App;
