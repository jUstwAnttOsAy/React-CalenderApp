import React from "react";
import TodoHeader from "./TodoComponents/TodoHeader";
import TodoList from "./TodoComponents/TodoList";

function TodoComponent() {
  return (
    <div className="content">
      <TodoHeader />
      <TodoList />
    </div>
  );
}

export default TodoComponent;
