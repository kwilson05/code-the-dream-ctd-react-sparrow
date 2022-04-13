import React, {useState} from "react";

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }
    
    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({title: todoTitle, 
            id: Date.now()});
        setTodoTitle("");
    }
   return (
    <form onSubmit={handleAddTodo}>
        <div>
            <label htmlFor="todoTitle">
                Title
            </label>
            <input type="text" 
            value={todoTitle} 
            onChange={handleTitleChange} id="todoTitle"/>
            <button type="submit">Add</button>
        </div>
    </form>
)
}

export default AddTodoForm;