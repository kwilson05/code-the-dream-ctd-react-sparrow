import React, { useState } from "react";
import propTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  };
  return (
    <form onSubmit={handleAddTodo}>
      <div>
        <InputWithLabel
          id={"todoTitle"}
          value={todoTitle}
          handleTitleChange={handleTitleChange}
          isFocused={true}
        >
          {"Title"}
        </InputWithLabel>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAddTodo: propTypes.func.isRequired,
};

export default AddTodoForm;
