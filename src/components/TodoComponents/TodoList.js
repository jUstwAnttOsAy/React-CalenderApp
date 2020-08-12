import React from "react";

function TodoList() {
  return (
    <div className="notes">
      <p>
        <input type="text" value="" placeholder="new note" />
        <a href="#" title="Add note" className="addNote animate">
          +
        </a>
      </p>
      <ul class="noteList">
        <li>
          Headbutt a lion
          <a href="#" title="Remove note" className="removeNote animate">
            x
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TodoList;
