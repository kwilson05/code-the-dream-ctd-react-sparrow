import React from "react";

const AddTodoForm = ({onAddTodo}) => {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitleField = event.target[0];
        const newTodo = todoTitleField.value;
        onAddTodo(newTodo);
        todoTitleField.value = "";

    }
   return (
    <form onSubmit={handleAddTodo}>
        <div>
            <label htmlFor="todoTitle">
                Title
            </label>
            <input type="text" id="todoTitle"/>
            <button type="submit">Add</button>
        </div>
    </form>
)
}

export default AddTodoForm;